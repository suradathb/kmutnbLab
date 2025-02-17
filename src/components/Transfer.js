import React from "react";
// import Web3Service from "./web3.server";
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class Transfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      address: "",
      amount: 0,
    };
  }
  async componentDidMount() {
    document.addEventListener('submit', this.handleFormSubmit, { passive: false });
    await web3Service.init(); // โหลด Web3 และ Smart Contract
    console.log("Web3 initialized:", web3Service);
  
    const kmutnb = web3Service.contracts.get("kmutnbToken");
    // console.log("Loaded contract:", kmutnb);
  
    if (!kmutnb) {
      console.error("kmutnbToken contract not found!");
      return;
    }
  
    try {
      const balanceOf = await kmutnb.balanceOf(web3Service.account);
      // console.log("BalanceOf:", balanceOf);
  
      this.setState({
        account: web3Service.account,
        kmutnbToken: kmutnb,
      }, () => {
        console.log("State updated:", this.state);
      });
    } catch (error) {
      console.error("Error loading contract data:", error);
    }
  }

  componentWillUnmount() {
    document.removeEventListener('submit', this.handleFormSubmit);
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.createTransfer();
  }
  
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  createTransfer() {
    if (!this.state.kmutnbToken) {
      console.error("kmutnbToken is not loaded yet.");
      return;
    }
  
    this.state.kmutnbToken.transfer(this.state.address, this.state.amount)
      .then((transaction) => {
        console.log("Transfer successful:", transaction);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error transferring tokens:", error);
      });
  }
  
  render() {
    return (
      <>
        <form
          // role="form"
          // onSubmit={(event) => {
          //   event.preventDefault();
          //   this.createTransfer(this.state);
          // }}
          role="form"
          onSubmit={this.handleFormSubmit}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseSix"
              >
                6.Transfer(to,amount)
              </a>
            </div>
            <div
              id="collapseSix"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to (address)"
                      name="address"
                      value={this.state.address}
                      onChange={(event) => {
                        this.setState({ address: event.target.value });
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
                      value="Transfer"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>
                        Transfer(address indexed from, address indexed to, uint
                        tokens)
                      </h4>
                      เป็น event ที่ถูกเรียก เมื่อโอนเกิดขึ้น
                      มาตรฐานบังคับให้ใส่ emit Transfer() ในฟังชั่น transfer()
                      และ transferFrom() ด้วย
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

export default Transfer;
