import React from "react";

function SetMetamask(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a className="card-link" data-toggle="collapse" href="#collapseOne">
            Setup Metamask chain Mumbai Testnet
          </a>
        </div>
        <div
          id="collapseOne"
          className="collapse hide"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div className="row">
              <div className="col-md-6">
                <p>
                  <h4>Mumbai Testnet</h4>
                </p>
                <p>
                  1.Network name : <pre>{"<ตั่งซื่อเครือข่ายของคุณ>"}</pre>
                </p>
                <p>
                  2.New RPC URL :{" "}
                  <pre>{"https://rpc-amoy.polygon.technology/"}</pre>
                </p>
                <p>
                  3.Chain ID : <pre>{"80002"}</pre>
                </p>
                <p>
                  4.Currency symbol : <pre>{"MATIC"}</pre>
                </p>
                <p>
                  5.Block explorer URL(Optional) :{" "}
                  <pre>{"https://amoy.polygonscan.com/"}</pre>
                </p>
              </div>
              <div className="col-md-6">
                <div className="full Showimage">
                  <img
                    className="img-responsive"
                    src="images/Setupmeatamask.png"
                    alt="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetMetamask;
