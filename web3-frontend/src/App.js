import { ethers } from "ethers";
import { useState } from "react";

const contractAddress = "0xF53eEF001a11A0BcD4321d55e958F2ff87C46Ec2";
const contractABI = [
  // DÁN ABI JSON Ở ĐÂY
  { "inputs": [], "name": "lastSender", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "lastUpdatedAt", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "message", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "string", "name": "_message", "type": "string" }], "name": "setMessage", "outputs": [], "stateMutability": "nonpayable", "type": "function" }
];

function App() {
  const [account, setAccount] = useState("");
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts[0]);
    const provider = new ethers.BrowserProvider(window.ethereum);

    await provider.send("eth_requestAccounts", []);

    const network = await provider.getNetwork();
    console.log("ChainId:", network.chainId.toString());

    if (network.chainId !== 11155111n) {
      alert("Please switch to Sepolia");
      return;
    }
  }

  async function readMessage() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );
    const msg = await contract.message();
    setMessage(msg);
  }

  async function writeMessage() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );
    const tx = await contract.setMessage(newMessage);
    await tx.wait();
    alert("Transaction confirmed");
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>MessageStorage DApp</h2>

      <button onClick={connectWallet}>Connect Wallet</button>
      <p>Account: {account}</p>

      <button onClick={readMessage}>Read Message</button>
      <p>Current Message: {message}</p>

      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="New message"
      />
      <button onClick={writeMessage}>Set Message</button>
    </div>
  );
}

export default App;
