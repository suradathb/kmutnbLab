import React from "react";
// import Web3Service from "./web3.server";
import { ethers } from 'ethers'; // ✅ เพิ่มการ import ethers
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class Allowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: "",
      spender: "",
      allowance: "",
    };
  }
  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const { kmutnbToken } = Web3Service.state;
  //   if (!kmutnbToken) {
  //     alert("Please check your web3 connection!");
  //     return;
  //   }
  //   try {
  //     const allowance = await kmutnbToken.methods
  //       .allowance(this.state.owner, this.state.spender)
  //       .call();
  //     this.setState({ allowance });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  handleSubmit = async (e) => {
    e.preventDefault();
    const kmutnbToken = web3Service.contracts.get("kmutnbToken");
    if (!kmutnbToken) {
      alert("Please check your web3 connection!");
      return;
    }
    try {
      const allowance = await kmutnbToken.allowance(this.state.owner, this.state.spender);
      const formattedAllowance = ethers.utils.formatUnits(allowance, 18); // แปลงค่าเป็น Ether
      this.setState({ allowance: formattedAllowance });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <form role="form" onSubmit={this.handleSubmit}>
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseShow"
              >
                6.Allowance(owner,spender)
              </a>
            </div>
            <div
              id="collapseShow"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <p>
                      <h3>ยอดเช็คที่รอเบิกคือ : </h3>
                      {this.state.allowance} Ether
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="owner (address)"
                      name="owner"
                      value={this.state.owner}
                      onChange={(event) => {
                        this.setState({ owner: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                      name="spender"
                      value={this.state.spender}
                      onChange={(event) => {
                        this.setState({ spender: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="Allowance"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>Allowance(owner,spender)</h4>
                      ใช้เพื่อเรียกดูยอดเช็คที่ถูกมอบให้ หากมีการ Approve
                      ยอดเช็คให้{" "}
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

export default Allowance;
