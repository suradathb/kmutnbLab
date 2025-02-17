import React from "react";
// import Web3Service from "./web3.server";
import web3Service from "./web3.server"; // ✅ ใช้ instance ที่ถูกต้อง

class DecreaseAllowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      spender: "",
      subtracted: 0,
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
  createDecreaseAllowance() {
    if (!this.state.kmutnbToken) {
      console.error("kmutnbToken is not loaded yet.");
      return;
    }
  
    this.state.kmutnbToken.decreaseAllowance(this.state.spender, this.state.subtracted)
      .then((transaction) => {
        console.log("Decrease allowance successful:", transaction);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error decreasing allowance:", error);
      });
  }
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createDecreaseAllowance(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseFour"
              >
                4.DecreaseAllowance(spender,subtractedValue)
              </a>
            </div>
            <div
              id="collapseFour"
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
                      name="subtracted"
                      value={this.state.subtracted}
                      onChange={(event) => {
                        this.setState({ subtracted: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="DecreaseAllowance"
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

export default DecreaseAllowance;
