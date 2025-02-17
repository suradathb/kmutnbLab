import React from "react";
// import Web3Service from "./web3.server";
import { ethers } from 'ethers'; // ✅ เพิ่มการ import ethers
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class Burn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      amount: 0,
    };
  }

  async componentDidMount() {
    // await Web3Service.loadWeb3();
    // await Web3Service.loadBlockchainData();
    // // console.log(Web3Service.state.kmutnbToken);
    // this.setState({
    //   account: Web3Service.state.account,
    //   kmutnbToken: Web3Service.state.kmutnbToken,
    // });
    await web3Service.init(); // ✅ ใช้ instance `web3Service`
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");

    if (kmutnbToken) {
      const balanceOf = await kmutnbToken.balanceOf(web3Service.account);
      this.setState({
        account: web3Service.account,
        kmutnbToken: kmutnbToken,
      });
    }
  }
  createBurn = async () => {
    const { kmutnbToken, account, amount } = this.state;
  
    if (!kmutnbToken) {
      console.error("kmutnbToken is not loaded yet.");
      return;
    }
  
    try {
      // แปลงจำนวนเงินเป็น Wei
      const amountInWei = ethers.utils.parseUnits(amount.toString(), 18);
      console.log("amountInWei:", amountInWei.toString());
      // Call burn
      const transaction = await kmutnbToken.burn(amountInWei).send({ from: account });
      console.log("Burn successful:", transaction);
      window.location.reload();
    } catch (error) {
      console.error("Error burning tokens:", error);
    }
  };
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createBurn();
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                2.Burn(uint256)
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                      name="amount"
                      value={this.state.amount}
                      onChange={(event) => {
                        this.setState({ amount: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="Burn"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>Burn(uint256)</h4> ใช้ฟังชั่นเพื่อ Burn
                      เหรียญจากยอดของ address ที่เข้าใช้งานอยู่
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Burn;
