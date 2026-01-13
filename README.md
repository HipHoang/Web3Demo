# MessageStorage DApp

A simple decentralized application (DApp) built on the Ethereum Sepolia testnet.  
This project demonstrates end-to-end Web3 development with smart contracts, frontend integration, and blockchain interaction using MetaMask.

🔗 **Live Demo**: https://web3-demo-gbqz6u33q-hieps-projects-89f6fbff.vercel.app/

---

## ⚙️ Tech Stack

- **Smart Contract:** Solidity (MessageStorage.sol)
- **Blockchain:** Ethereum Sepolia Testnet
- **Frontend:** React
- **Web3 Library:** ethers.js v6
- **Wallet Integration:** MetaMask
- **Deployment:** Vercel
- **Explorer:** Sepolia Etherscan

---

## 🧠 Project Overview

This DApp allows users to:

- Connect a MetaMask wallet
- Read a message stored on the blockchain
- Update the message (transaction on Sepolia testnet)
- Display who updated the message and when

The app demonstrates a standard Web3 flow:
> Frontend → Provider/Signer → Contract → Blockchain

---

## 🧱 Smart Contract

### Contract: `MessageStorage.sol`

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MessageStorage {
    string public message;
    address public lastSender;
    uint256 public lastUpdatedAt;

    function setMessage(string memory _message) public {
        message = _message;
        lastSender = msg.sender;
        lastUpdatedAt = block.timestamp;
    }
}
