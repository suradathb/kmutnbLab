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
      symbol: "",
      decimal: 0,
      name: "",
      totalSupply:0,
      balanceOf:0,
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
      this.state.symbol = await kmutnbToken.methods.symbol().call({ from: accounts[0]});
      this.state.decimal = await kmutnbToken.methods.decimals().call({from: accounts[0]});
      this.state.name = await kmutnbToken.methods.name().call({ from: accounts[0] });
      this.state.totalSupply = await kmutnbToken.methods.totalSupply().call({from: accounts[0]});
      this.state.balanceOf = await kmutnbToken.methods.balanceOf(accounts[0]).call({from: accounts[0]});
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
      this.state.symbol = await MyToken20.methods.symbol().call({ from: erc20accounts[0]});
      this.state.decimal = await MyToken20.methods.decimals().call({from: erc20accounts[0]});
      this.state.name = await MyToken20.methods.name().call({ from: erc20accounts[0] });
      this.state.totalSupply = await MyToken20.methods.totalSupply().call({from: erc20accounts[0]});
      this.state.balanceOf = await MyToken20.methods.balanceOf(erc20accounts[0]).call({from: erc20accounts[0]});
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
      this.state.myToken721 = await MyToken721;
      console.log(MyToken721);
      this.state.symbol = await MyToken721.methods.symbol().call({ from: erc721accounts[0]});
      // this.state.decimal = await MyToken721.methods.decimals().call({from: erc721accounts[0]});
      this.state.name = await MyToken721.methods.name().call({ from: erc721accounts[0] });
      // this.state.totalSupply = await MyToken721.methods.totalSupply().call({from: erc721accounts[0]});
      this.state.balanceOf = await MyToken721.methods.balanceOf(erc721accounts[0]).call({from: erc721accounts[0]});
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
      this.state.myToken1155 = await MyToken1155;
      // this.state.symbol = await MyToken1155.methods.symbol().call({ from: erc1155account[0]});
      // this.state.decimal = await MyToken1155.methods.decimals().call({from: erc1155account[0]});
      // this.state.name = await MyToken1155.methods.name().call({ from: erc1155account[0] });
      // this.state.totalSupply = await MyToken1155.methods.totalSupply().call({from: erc1155account[0]});
      // this.state.balanceOf = await MyToken1155.methods.balanceOf(erc1155account[0]).call({from: erc1155account[0]});
    }
  }
}

const web3Service = new Web3Service();
export default web3Service;
