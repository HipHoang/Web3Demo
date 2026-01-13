# MessageStorage DApp

A simple decentralized application (DApp) built on Ethereum Sepolia testnet.
Users can read and update a message stored on-chain via MetaMask.

## Tech Stack
- Solidity
- Ethereum (Sepolia testnet)
- Ethers.js v6
- React
- MetaMask

## Smart Contract
- Network: Sepolia
- Contract Address: 0xF53eEF001a11A0BcD4321d55e958F2ff87C46Ec2
- Etherscan: https://sepolia.etherscan.io/address/0xF53eEF001a11A0BcD4321d55e958F2ff87C46Ec2

### Contract Features
- Store a message on-chain
- Track last sender address
- Track last updated timestamp

## Frontend Features
- Connect MetaMask wallet
- Read message from blockchain
- Write message to blockchain
- Network validation (Sepolia only)

## How to Run Locally

```bash
cd frontend
npm install
npm start