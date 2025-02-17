import React from "react";
import web3Service from './web3.server';
import { ethers } from "ethers";

class OwnerMint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      amount: 0,
    };
  }

  // async componentDidMount() {
  //   await Web3Service.loadWeb3();
  //   await Web3Service.loadBlockchainData();
  //   console.log(this.state.account);
  //   this.setState({
  //     account: Web3Service.state.account,
  //     kmutnbToken: Web3Service.state.kmutnbToken,
  //   });

  // }

  async componentDidMount() {
    await web3Service.init(); // โหลด Web3 และ Smart Contract
    // console.log("Web3 initialized:", web3Service);
  
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");
    // console.log("Loaded contract:", kmutnbToken);
  
    if (!kmutnbToken) {
      console.error("kmutnbToken contract not found!");
      return;
    }
  
    try {
      const balanceOf = await kmutnbToken.methods.balanceOf(web3Service.account).call();
      console.log("BalanceOf:", balanceOf);
  
      this.setState({
        account: web3Service.account,
        kmutnbToken: kmutnbToken,
      });
    } catch (error) {
      console.error("Error loading contract data:", error);
    }
  }
  
  async Mint() {
    try {
        // ประมาณค่า gas โดยอัตโนมัติ
        const gasEstimate = await this.state.kmutnbToken.methods
            .mint(this.state.account, this.state.amount)
            .estimateGas({ from: this.state.account });

        // ส่งธุรกรรม
        await this.state.kmutnbToken.methods
            .mint(this.state.account, this.state.amount)
            .send({
                from: this.state.account,
                gas: gasEstimate,  // ใช้ค่า gas ที่ประมาณมา
                gasPrice: '30000000000' // กำหนดค่า gas price (30 gwei)
            })
            .once("receipt", (receipt) => {
                console.log("MintSuccess", this.state.account, ":", this.state.amount);
                window.location.reload();
            });

    } catch (error) {
        console.error("Transaction Error: ", error);

        // คุณสามารถแจ้งผู้ใช้หรือทำการ retry ธุรกรรมได้ถ้าต้องการ
        alert("เกิดข้อผิดพลาดในการทำธุรกรรม กรุณาลองอีกครั้ง");
    }
}

  // Mint() {
  //   // alert("ฟังชั่นนี้ยังไม่เปิดใช้งาน กรุณาดำเนินการตามโจทย์ และเปิดใช้งาน");
  //   // console.log(this.state.address)
  //   this.state.kmutnbToken.methods
  //     .mint(this.state.account,this.state.amount)
  //     .send({ from: this.state.account })
  //     .once("receipt", (receipt) => {
  //       console.log("BurnSusess", this.state.account, ":", this.state.amount);
  //       window.location.reload();
  //     });
  // }
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.Mint(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseone"
              >
                แบบฝึกหัด Smart Contract
              </a>
            </div>
            <div
              id="collapseone"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <p>
                      <h4>โจทย์</h4> 1.กำหนดให้เขียน Function Smart Contract
                      โดยใช้ Smart Contract เดิมที่มีอยู่ เพิ่ม Function "mint(address,amount)"
                      ให้ผู้ออก Token เท่านั้นที่สามารถออก Token
                      เพิ่มเข้ามายังระบบได้
                    </p>
                    <p className="note">
                      CMD : truffle migrate --reset --network kmutnbTes
                    </p>
                    <p>
                      2.หลังจากการ Deploy smart contract กำหนดให้เรียก Smart
                      Contract ผ่าน Action ที่ได้เตรียมไว้ให้ ให้ผู้ออก Token
                      สามารถเพิ่ม Token เข้าในระบบได้
                    </p>
                    <p className="note">
                      Function ที่เตรียมไว้อยู่ที่ components/OwnerMint.js
                    </p>
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
                      value="Mint"
                      className="btn btn-success"
                    />
                    <p className="note">
                      <h4>หมายเหตุ : </h4> การเช็คยอดจากระบบสามารถเช็คได้จาก
                      Smart Contract ฟังชั่น TotalSupply() ที่ Menu : Smart
                      Contract
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

export default OwnerMint;
