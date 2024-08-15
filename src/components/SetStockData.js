import React from "react";
import { Link } from "react-router-dom";

function SetStockData(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a className="card-link" data-toggle="collapse" href="#collapseTwo">
            Gas and Log Transection
          </a>
        </div>
        <div
          id="collapseTwo"
          className="collapse hide"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <h4>Polygon Amoy Faucet</h4>
                </p>
                <p>
                  1.ให้บริการ Token สำหรับทดสอบบน Test Net ใช้เป็นค้า Gas
                  หรือค่าบริการ transction :{" "}
                  <a
                    className="btn btn-success"
                    href="https://faucet.polygon.technology/"
                  >
                    Faucet
                  </a>
                </p>
                <p>
                  <h4>Polygon Scan</h4>
                </p>
                <p>
                  2.Polygon Scan ให้บริการเก็บธุรกรรมที่ดำเนินการ และสัญญาที่ถูก
                  Deploy ขึ้นไปยัง Chain :{" "}
                  <a
                    className="btn btn-success"
                    href="https://amoy.polygonscan.com/"
                  >
                    Polygonscan
                  </a>
                </p>
                <p>
                  <h4>Polygon Documentation</h4>
                </p>
                <p>
                  3.เอกสารคู่มือการเชื่อมต่อกับ Chain Polygon :{" "}
                  <a
                    className="btn btn-success"
                    href="https://docs.polygonscan.com/v/amoy-polygonscan"
                  >
                    Documentation
                  </a>
                </p>
                <p>
                Introducing the Amoy Testnet for Polygon PoS : {" "}
                <a
                    className="btn btn-success"
                    href="https://polygon.technology/blog/introducing-the-amoy-testnet-for-polygon-pos"
                  >
                     Amoy Testnet
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetStockData;
