import React from "react";
import { Link } from "react-router-dom";
import Allowance from "./Allowance";
import "./ReadContract.css";
import Web3Service from "./web3.server";

class ReadContract extends React.Component {
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    await Web3Service.loadErc20();
    await Web3Service.loadErc721();
    const balanceOf = await Web3Service.state.kmutnbToken.methods
      .balanceOf(Web3Service.state.account)
      .call({ from: Web3Service.state.account });
    const names = await Web3Service.state.kmutnbToken.methods
      .name()
      .call({ from: Web3Service.state.account });
    const symbols = await Web3Service.state.kmutnbToken.methods
      .symbol()
      .call({ from: Web3Service.state.account });
    const decimal = await Web3Service.state.kmutnbToken.methods
      .decimals()
      .call({ from: Web3Service.state.account });
    const totalSupply = await Web3Service.state.kmutnbToken.methods
      .totalSupply()
      .call({ from: Web3Service.state.account });
    // console.log(Web3Service.state.kmutnbToken);
    this.setState({
      account: Web3Service.state.account,
      kmutnbToken: Web3Service.state.kmutnbToken,
      MyToken20: Web3Service.state.myToken20,
      MyToken721: Web3Service.state.myToken721,
      balanceOf: balanceOf,
      SName: names,
      SSymbols: symbols,
      decinals: decimal,
      totalSupply: totalSupply,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      MyToken20:"",
      MyToken721:"",
      balanceOf: 0,
      totalSupply: 0,
      SName: "",
      SSymbols: "",
      decinals: 0,
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        {/* <!-- Start Banner --> */}
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>KMUTNB ICO Read Contract</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}

        <form className="col-md-12">
          <div className="row">
            <div className="full paddding_left_15">
              <div className="heading_main text_align_left">
                <h2>
                  <span className="theme_color">KMUTNB</span>ICO ERC20
                </h2>
              </div>
            </div>
            <div className="col col-link">
              <Link className="link" to="/">
                Read Contract
              </Link>
              <Link className="link" to="/write">
                write Contract
              </Link>
            </div>
            <br />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Methods</th>
                  <th scope="col">Details</th>
                  <th scope="col">Display</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>BalanceOf(address)</td>
                  <td>จำนวน Token ทั้งหมดที่ address นั้นมี</td>
                  <td>{this.currencyFormat(this.state.balanceOf)}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Decimals()</td>
                  <td>หน่วยทศนิยม Token</td>
                  <td>{this.currencyFormat(this.state.decinals)}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Name()</td>
                  <td>ชื่อเต็มของ Token </td>
                  <td>{this.state.SName}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Symbol()</td>
                  <td>ชื่อย่อของ Token </td>
                  <td>{this.state.SSymbols}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>TotalSupply()</td>
                  <td>จำนวน Token ทั้งหมดในระบบ</td>
                  <td>{this.currencyFormat(this.state.totalSupply)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div id="accordion">
          <Allowance />
        </div>
      </>
    );
  }
}

export default ReadContract;
