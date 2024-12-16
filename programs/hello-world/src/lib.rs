use anchor_lang::prelude::*;

declare_id!("GLbDRadjyaBmjM3R2VUkZ2fsZ5S4mWL91eXBudhhWsDM");

#[program]
pub mod hello_world {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>, hello: String) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);

        let data_account = &mut ctx.accounts.data_account;

        data_account.hello = hello;

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
    #[account(
        init,
        payer = signer,
        space = 200,
    )]
    pub data_account: Account<'info, DataAccount>,
    pub system_program: Program<'info,System>,
}

#[account]
pub struct DataAccount {
    pub hello: String,
}