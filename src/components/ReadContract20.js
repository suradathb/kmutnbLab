import React from 'react';
import { Link } from 'react-router-dom';
import Web3Service from "./web3.server";
import { ethers } from 'ethers'; // ✅ เพิ่มการ import ethers

class ReadContract20 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null,
      myTokenErc20: null,
      getSymbol: null,
      getDecimal: 0,
      getName: "",
      getTotalSupply: 0,
      getBalanceOf: 0,
    };
  }

  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadErc20();
    this.setState({
      account: Web3Service.state.account,
      myTokenErc20: Web3Service.state.myToken20,
      getSymbol: Web3Service.state.symbol,
      getDecimal: Web3Service.state.decimal,
      getName: Web3Service.state.name,
      getTotalSupply: Web3Service.state.totalSupply,
      getBalanceOf: Web3Service.state.balanceOf,
    });
    this.updateBalance();
    this.balanceInterval = setInterval(this.updateBalance, 10000); // ✅ อัปเดตยอดคงเหลือทุก 10 วินาที
  }

  componentWillUnmount() {
    clearInterval(this.balanceInterval); // ✅ ล้าง interval เมื่อ component ถูกทำลาย
  }

  updateBalance = async () => {
    const { myTokenErc20, account } = this.state;
    if (myTokenErc20 && account) {
      const balanceOf = await myTokenErc20.balanceOf(account);
      const balanceInEther = ethers.utils.formatUnits(balanceOf, 18); // ✅ แปลงจาก Wei เป็น Ether
      this.setState({ getBalanceOf: balanceInEther });
    }
  };

  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }

  toggleVisibility = (section) => {
    this.setState((prevState) => ({
      activeSection: prevState.activeSection === section ? null : section,
    }));
  };

  render() {
    const { activeSection } = this.state;
    return (
      <>
        <br />
        <div className="col col-link">
          <Link
            className={`link ${activeSection === 'section1' ? 'active' : ''}`}
            onClick={() => this.toggleVisibility('section1')}
          >
            Read Contract
          </Link>
          <Link
            className={`link ${activeSection === 'section2' ? 'active' : ''}`}
            onClick={() => this.toggleVisibility('section2')}
          >
            Write Contract
          </Link>
        </div>
        {activeSection === 'section1' && (
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
                <td>{this.currencyFormat(this.state.getBalanceOf)} ETH</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Decimals()</td>
                <td>หน่วยทศนิยม Token</td>
                <td>{this.state.getDecimal}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Name()</td>
                <td>ชื่อเต็มของ Token </td>
                <td>{this.state.getName}</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Symbol()</td>
                <td>ชื่อย่อของ Token </td>
                <td>{this.state.getSymbol}</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>TotalSupply()</td>
                <td>จำนวน Token ทั้งหมดในระบบ</td>
                <td>{this.currencyFormat(ethers.utils.formatUnits(this.state.getTotalSupply, 18))} ETH</td>
              </tr>
            </tbody>
          </table>
        )}
        {activeSection === 'section2' && (
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseOne"
              >
                1. Approve(address, uint256)
              </a>
            </div>
            <div
              id="collapseOne"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                      name="spender"
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                      name="amount"
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="Approve"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>approve(address spender, uint tokens)</h4> ใช้กันเงินให้อีก address เหมือนกับทำแคชเชียร์เช็คโอนเงินให้ ได้ transaction log กลับมา เพราะเป็นการบันทึกข้อมูลลง transaction เหมือนกับ transfer()
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ReadContract20;