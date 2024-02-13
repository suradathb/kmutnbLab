import React from "react";
import { Link } from "react-router-dom";
import Web3Service from "./web3.server";
import "./Header.css";

class Header extends React.Component {
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    const balanceOf = await Web3Service.state.kmutnbToken.methods
      .balanceOf(Web3Service.state.account)
      .call({ from: Web3Service.state.account });
    this.setState({
      account: Web3Service.state.account,
      kmutnbToken: Web3Service.state.kmutnbToken,
      balanceOf: balanceOf,
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      balanceOf: 0,
    };
  }
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
                        Token : {this.currencyFormat(this.state.balanceOf)} wei
                      </h3>
                    </li>
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
                            <Link className="nav-link active" to="/">
                              Smart Contract
                            </Link>
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
                          {/* <li>
                            <Link className="nav-link" to="/standard">
                              Standard ERC
                            </Link>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="search-box">
                    <input
                      type="text"
                      className="search-txt"
                      placeholder="Search"
                    />
                    <a className="search-btn">
                      <img src="../images/search_icon.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- End header --> */}
      </>
    );
  }
}

export default Header;
