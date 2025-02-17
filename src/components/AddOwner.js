import React from 'react'
import web3Service from './web3.server';
import { ethers } from "ethers";

class AddOwner extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '',
      kmutnbToken: null,
      addressOwner: '',
    }
  }

  async componentDidMount() {
    await web3Service.init(); // โหลด Web3 และ Smart Contract
    console.log("Web3 initialized:", web3Service);
  
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");
    console.log("Loaded contract:", kmutnbToken);
  
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
  
  async AddMint() {
    try {
      if (!this.state.kmutnbToken) {
        alert("Contract is not loaded. Please check your network.");
        return;
      }

      const contract = this.state.kmutnbToken;
      const signer = web3Service.signer;

      const gasEstimate = await contract.estimateGas.addMinter(
        this.state.addressOwner
      );

      const tx = await contract.connect(signer).addMinter(this.state.addressOwner, {
        gasLimit: gasEstimate,
        gasPrice: ethers.utils.parseUnits("30", "gwei"),
      });

      await tx.wait(); // รอให้ธุรกรรมสำเร็จ
      console.log("Mint Success:", this.state.account, "=>", this.state.addressOwner);

      window.location.reload();
    } catch (error) {
      console.error("Transaction Error: ", error);
      alert("เกิดข้อผิดพลาดในการทำธุรกรรม กรุณาลองอีกครั้ง");
    }
  }
  // AddMint() {
  //   // alert("ฟังชั่นนี้ยังไม่เปิดใช้งาน กรุณาดำเนินการตามโจทย์ และเปิดใช้งาน");
  //   // console.log(this.state.address)
  //   this.state.kmutnbToken.methods
  //     .addMinter(this.state.addressOwner)
  //     .send({ from: this.state.account })
  //     .once("receipt", (receipt) => {
  //       console.log("BurnSusess", this.state.account, ":", this.state.addressOwner);
  //       window.location.reload();
  //     });
  // }

  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault()
            this.AddMint(this.state)
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapsetwo"
              >
                แบบฝึกหัด Smart Contract #2
              </a>
            </div>
            <div
              id="collapsetwo"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <button onClick={this.handleClick}>Count Down</button>
                    <p>{this.state.count}</p>
                    <p>
                      <h4>โจทย์</h4> 1.กำหนดให้เขียนฟังชั่น Smart Contract
                      โดยใช้ Smart Contract เดิมที่มีอยู่ เพิ่มฟังชั่น
                      "addMinter(address)"
                      ให้สามารถเพิ่มเจ้าหน้าที่ที่สามารถเพิ่มเหรียญเข้าในระบบได้
                    </p>
                    <p>CMD : truffle migrate --reset --network kmutnbTes</p>
                    <p>
                      2.หลังจากการ Deploy smart contract กำหนดให้เรียก Smart
                      Contract ผ่าน Action ที่ได้เตรียมไว้ให้ โดยใช้ address
                      ของเจ้าหน้าที่ที่เพิ่มเข้าไปในระบบใหม่
                      เพิ่มวงเงินเข้าไปในระบบ 500 Token ผ่าน ฟังชั่น
                      Mint(uint256)
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="account (address)"
                      name="addowner"
                      value={this.state.addressOwner}
                      onChange={(event) => {
                        this.setState({ addressOwner: event.target.value })
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="AddOwner"
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
    )
  }
}

export default AddOwner
