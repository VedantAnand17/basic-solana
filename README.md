# Solana Hello World Program

A simple Solana program built with Anchor that demonstrates basic account creation and data storage on the Solana blockchain.

## Overview

This program allows users to:
- Create a new account on Solana
- Store a greeting message in that account
- Retrieve the stored message

## Technical Details

The program consists of:

- A single instruction `initialize` that creates a new account and stores a greeting
- A `DataAccount` structure that holds the greeting message
- Tests to verify the program's functionality

## Program Structure

```rust
// Main program instruction
pub fn initialize(ctx: Context<Initialize>, hello: String) -> Result<()> {
    // Store the greeting in the new account
    let data_account = &mut ctx.accounts.data_account;
    data_account.hello = hello;
    Ok(())
}
```

## Getting Started

### Prerequisites

- Rust and Cargo
- Solana CLI tools
- Anchor Framework
- Node.js and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
yarn install
```

3. Build the program:
```bash
anchor build
```

### Testing

Run the test suite:
```bash
anchor test
```

## Account Structure

The program uses two main accounts:
1. Signer Account - The account paying for the transaction
2. Data Account - Stores the greeting message

## Development

The project uses:
- Anchor framework for Solana program development
- TypeScript for tests
- Mocha as the test runner

## License

ISC License