import Web3 from "web3";
import KmutnbToken from "../abis/KmutnbToken.json";
import MyTokenERC from "../abis/MyToken20.json";
import MyTokenERC721 from "../abis/MyToken721.json";
import MyTokenERC1155 from "../abis/MyToken1155.json";
class Web3Service {
  constructor() {
    this.web3 = null;
    this.state = {
      account: "",
      kmutnbToken: null,
      myToken20:null,
      myToken721:null,
      myToken1155:null,
      symbol: null,
    };
  }

  async loadWeb3() {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.listenForAccountChanges();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    this.web3 = window.web3;
  }

  listenForAccountChanges() {
    window.ethereum.on("accountsChanged", (accounts) => {
      this.state.account = accounts[0];
      this.loadBlockchainData();
      this.loadErc20();
    });
  }

  async loadBlockchainData() {
    if (this.web3) {
      const accounts = await this.web3.eth.getAccounts();
      this.state.account = accounts[0];
      const networkId = await this.web3.eth.net.getId();
      const networkData = KmutnbToken.networks[networkId];
      const abi = KmutnbToken.abi;
      const address = networkData.address;
      const kmutnbToken = new this.web3.eth.Contract(abi, address);
      this.state.kmutnbToken = kmutnbToken;
    }
  }

  async loadErc20(){
    if(this.web3) {
      const erc20accounts = await this.web3.eth.getAccounts();
      this.state.account = erc20accounts[0];
      const erc20networkId = await this.web3.eth.net.getId();
      const erc20networkData = MyTokenERC.networks[erc20networkId];
      const erc20abi = MyTokenERC.abi;
      const erc20address = erc20networkData.address;
      const MyToken20 = new this.web3.eth.Contract(erc20abi, erc20address);
      this.state.myToken20 = MyToken20;

    }
  }

  async loadErc721() {
    if(this.web3){
      const erc721accounts = await this.web3.eth.getAccounts();
      this.state.account = erc721accounts[0];
      const erc721networkId = await this.web3.eth.net.getId();
      const erc721networkData = MyTokenERC721.networks[erc721networkId];
      const erc721abi = MyTokenERC721.abi;
      const erc721address = erc721networkData.address;
      const MyToken721 = new this.web3.eth.Contract(erc721abi,erc721address);
      this.state.myToken721 = MyToken721;
    }
  }

  async loadErc1155 (){
    if (this.web3){
      const erc1155account = await this.web3.eth.getAccounts();
      this.state.account = erc1155account[0];
      const erc1155networkId = await this.web3.eth.net.getId();
      const erc1155networkIdData =  MyTokenERC1155.networks[erc1155networkId];
      const erc1155abi = MyTokenERC1155.abi;
      const erc1155address = erc1155networkIdData.address;
      const MyToken1155 = new this.web3.eth.Contract(erc1155abi,erc1155address);
      this.state.myToken1155 = MyToken1155;
    }
  }
}

const web3Service = new Web3Service();
export default web3Service;
