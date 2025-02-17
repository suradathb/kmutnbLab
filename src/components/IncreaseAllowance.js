import React from "react";
// import Web3Service from "./web3.server";
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class IncreaseAllowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      spender: "",
      addedValue: 0,
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
  createIncreaseAllowance() {
    if (!this.state.kmutnbToken) {
      console.error("kmutnbToken is not loaded yet.");
      return;
    }
  
    this.state.kmutnbToken.increaseAllowance(this.state.spender, this.state.addedValue)
      .then((transaction) => {
        console.log("Increase allowance successful:", transaction);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error increasing allowance:", error);
      });
  }
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createIncreaseAllowance(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseFive"
              >
                5.IncreaseAllowance(spender,addedValue)
              </a>
            </div>
            <div
              id="collapseFive"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
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
                      type="number"
                      className="form-control"
                      placeholder="subtractedValue (uint256)"
                      name="addedValue"
                      value={this.state.addedValue}
                      onChange={(event) => {
                        this.setState({ addedValue: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="IncreaseAllowance"
                      className="btn btn-success"
                    />
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

export default IncreaseAllowance;
