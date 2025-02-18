import Web3 from 'web3';
import { ethers } from "ethers";
import KmutnbToken from "../abis/KmutnbToken.json";

class Web3Service {
  constructor() {
    this.provider = null;
    this.signer = null;
    this.contracts = new Map();
    this.account = "";
    this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
  }

  async init() {
    if (window.ethereum) {
      // this.provider = new ethers.BrowserProvider(window.ethereum);
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      this.signer = await this.provider.getSigner();
      
      await window.ethereum.request({ method: "eth_requestAccounts" });
      this.account = await this.signer.getAddress();

      this.listenForEvents();
      await this.loadToken(KmutnbToken, "kmutnbToken");
    } else {
      console.error("Non-Ethereum browser detected. Please install MetaMask!");
    }
  }

  async getAccount() {
    if (!this.signer) {
      console.warn("Signer not initialized, calling init()");
      await this.init(); // เรียก init() ก่อนเพื่อให้แน่ใจว่า signer ถูกตั้งค่าแล้ว
    }
    return this.account;
  }
  

  async connectWallet() {
    try {
      if (!window.ethereum) {
        console.error("MetaMask is not installed!");
        return;
      }
      await window.ethereum.request({ method: "eth_requestAccounts" });
      this.account = await this.signer.getAddress();
      return this.account;
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  }
  

  listenForEvents() {
    window.ethereum.on("accountsChanged", async (accounts) => {
      if (accounts.length === 0) {
        console.warn("Please connect to MetaMask.");
      } else {
        this.account = accounts[0];
        await this.init();
      }
    });

    window.ethereum.on("chainChanged", async () => {
      console.log("Network changed, reloading...");
      window.location.reload();
    });
  }

  async loadToken(tokenAbi, tokenKey) {
    try {
      const network = await this.provider.getNetwork();
      const networkId = Number(network.chainId);
      const networkData = tokenAbi.networks[networkId];

      if (!networkData) {
        console.warn(`Token not deployed on network ${networkId}`);
        return;
      }

      const contract = new ethers.Contract(networkData.address, tokenAbi.abi, this.signer);
      this.contracts.set(tokenKey, contract);

      const name = await contract.name();
      const symbol = await contract.symbol();
      const decimals = await contract.decimals();
      const totalSupply = await contract.totalSupply();
      const balanceOf = await contract.balanceOf(this.account);

      // console.log(`${name} (${symbol}):`);
      // console.log(`Decimals: ${decimals}`);
      // console.log(`Total Supply: ${ethers.formatUnits(totalSupply, decimals)}`);
      // console.log(`Your Balance: ${ethers.formatUnits(balanceOf, decimals)}`);
    } catch (error) {
      console.error(`Error loading ${tokenKey}:`, error);
    }
  }
}

const web3Service = new Web3Service();
export default web3Service;
