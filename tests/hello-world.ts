import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { HelloWorld } from "../target/types/hello_world";

describe("hello-world", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.HelloWorld as Program<HelloWorld>;

  const signer = anchor.web3.Keypair.generate();
  const data_account = anchor.web3.Keypair.generate();

  it("Is initialized!", async () => {
    await program.provider.connection.confirmTransaction(await program.provider.connection.requestAirdrop(signer.publicKey, 100*anchor.web3.LAMPORTS_PER_SOL),"confirmed");
    // Add your test here.
    const tx = await program.methods.initialize("Hello Solana").accounts({
      signer: signer.publicKey,
      dataAccount: data_account.publicKey,
    }).signers([signer, data_account]).rpc();
    console.log("Your transaction signature", tx);

    const dataAccount = await program.account.dataAccount.fetch(data_account.publicKey);

    console.log("Data Account", dataAccount);
  });
});
