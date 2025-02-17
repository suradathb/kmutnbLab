import React from "react";
import { Link } from "react-router-dom";
import Allowance from "./Allowance";
import "./ReadContract.css";
import web3Service from "./web3.server";
import { ethers } from 'ethers'; // ✅ เพิ่มการ import ethers

class ReadContract extends React.Component {
  async componentDidMount() {
    await web3Service.init(); // เปลี่ยนจาก `loadWeb3()` และ `loadBlockchainData()`
    
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");
    if (!kmutnbToken) {
      console.error("KMUTNB Token contract not loaded.");
      return;
    }
  
    try {
      const balanceOf = await kmutnbToken.balanceOf(web3Service.account);
      const names = await kmutnbToken.name();
      const symbols = await kmutnbToken.symbol();
      const decimal = await kmutnbToken.decimals();
      const totalSupply = await kmutnbToken.totalSupply();
  
      this.setState({
        account: web3Service.account,
        kmutnbToken: kmutnbToken,
        MyToken20: web3Service.contracts.get("myToken20"),
        MyToken721: web3Service.contracts.get("myToken721"),
        balanceOf: ethers.utils.formatUnits(balanceOf, decimal), // ✅ แปลงจาก Wei เป็นหน่วยที่ถูกต้อง
        SName: names,
        SSymbols: symbols,
        decinals: decimal.toString(),
        totalSupply: ethers.utils.formatUnits(totalSupply, decimal), // ✅ แปลงจาก Wei เป็นหน่วยที่ถูกต้อง
      });
    } catch (error) {
      console.error("Error fetching contract data:", error);
    }
  }
  
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      MyToken20: "",
      MyToken721: "",
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
                Write Contract
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
                  <td>{this.currencyFormat(this.state.balanceOf)} {this.state.SSymbols}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Decimals()</td>
                  <td>หน่วยทศนิยม Token</td>
                  <td>{this.state.decinals}</td>
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
                  <td>{this.currencyFormat(this.state.totalSupply)} {this.state.SSymbols}</td>
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