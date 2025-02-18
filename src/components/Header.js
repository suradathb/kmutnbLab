import React from "react";
import { Link } from "react-router-dom";
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง
import { ethers } from 'ethers'; // ✅ เพิ่มการ import ethers
import "./Header.css";
import ConnectWallet from "./ConnectWallet";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      balanceOf: "0",
      SSymbols: "",
    };
  }

  async componentDidMount() {
    await web3Service.init(); // ✅ ใช้ instance `web3Service`
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");
    if (kmutnbToken) {
      const symbols = await kmutnbToken.symbol();
      this.setState({
        account: web3Service.account,
        kmutnbToken: kmutnbToken,
        SSymbols: symbols,
      });
      this.updateBalance();
      this.balanceInterval = setInterval(this.updateBalance, 10000); // ✅ อัปเดตยอดคงเหลือทุก 10 วินาที
    } else {
      console.error("kmutnbToken contract not found");
    }
  }

  componentWillUnmount() {
    clearInterval(this.balanceInterval); // ✅ ล้าง interval เมื่อ component ถูกทำลาย
  }

  updateBalance = async () => {
    const { kmutnbToken, account } = this.state;
    if (kmutnbToken && account) {
      const balanceOf = await kmutnbToken.balanceOf(account);
      const balanceInEther = ethers.utils.formatUnits(balanceOf, 18); // ✅ แปลงจาก Wei เป็น Ether
      this.setState({ balanceOf: balanceInEther });
    }
  };

  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }

  render() {
    return (
      <>
        <header className="top-header">
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="logo_section">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="logo"
                      src="../images/cis.png"
                      alt="image"
                    />
                  </Link>
                </div>
                <div className="site_information-head">
                  <ul>
                    <li className="nav-link-head">
                      <h3>
                        Token : {this.currencyFormat(this.state.balanceOf)} {this.state.SSymbols} 
                      </h3>
                    </li>
                    <ConnectWallet />
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="col-sm-12">
                <div
                  className="menu_orange_section"
                  style={{ background: "#ff880e" }}
                >
                  <nav className="navbar header-nav navbar-expand-lg">
                    <div className="menu_section">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar-wd"
                        aria-controls="navbar-wd"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbar-wd"
                      >
                        <ul className="navbar-nav">
                          <li>
                            <Link className="nav-link active" to="/"> Smart Contract </Link>
                          </li>
                          <li>
                            <Link className="nav-link" to="/erc20">
                              Document
                            </Link>
                         </li>
                          <li>
                            <Link className="nav-link" to="/example">
                              Example
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="search-box"></div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;