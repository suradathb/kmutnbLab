import React from "react";
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class TransferFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      addressTo: "",
      addressFrom: "",
      amount: 0,
      success: false,
    };
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

    this.setState({
      account: web3Service.account,
      kmutnbToken: kmutnbToken,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { kmutnbToken, account } = this.state;
    if (!kmutnbToken) {
      alert("Please check your web3 connection!");
      return;
    }
    try {
      const success = await kmutnbToken.transferFrom(
        this.state.addressFrom,
        this.state.addressTo,
        this.state.amount
      ).send({ from: account });

      this.setState({ success: success });
      console.log("Transfer successful:", success);
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={this.handleSubmit}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseSeven"
              >
                7.TransferFrom(from,to,amount)
              </a>
            </div>
            <div
              id="collapseSeven"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <p>
                      <h4>ผลการรับเช็ค : </h4>
                      {this.state.success ? "Success" : "Pending"}
                    </p>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="from (address)"
                      name="addressFrom"
                      value={this.state.addressFrom}
                      onChange={(event) => {
                        this.setState({ addressFrom: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to (address)"
                      name="addressTo"
                      value={this.state.addressTo}
                      onChange={(event) => {
                        this.setState({ addressTo: event.target.value });
                      }}
                    />
                  </div>
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
                      value="TransferFrom"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>
                        transferFrom(address from, address to, uint tokens)
                        public returns (bool success)
                      </h4>
                      สั่งโอนเงินที่ approve() ไว้ เหมือนเอาเช็คไปเบิก ข้อสังเกต
                      ต้องเป็นฝั่งรับไปสั่งเบิก
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

export default TransferFrom;