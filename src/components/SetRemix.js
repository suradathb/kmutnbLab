import React from "react";

function SetRemix(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a className="card-link" data-toggle="collapse" href="#collapseFour">
            Remix IDE
          </a>
        </div>
        <div
          id="collapseFour"
          className="collapse hide"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <h4>Remix IDE:</h4>
                </p>
                <p>
                  ทดสอบสัญญาด้วย Remix IDE :{" "}
                  <a
                    className="btn btn-success"
                    href="https://remix.ethereum.org/"
                  >
                    Remix IDE
                  </a>
                </p>
                <p>
                  <h4>ERC20 Code 2:</h4>
                </p>
                <div className="bg-black rounded-md">
                  <div className="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans">
                    <span class>Solidity</span>
                    <button class="flex ml-auto gap-2">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="h-4 w-4"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <rect
                          x="8"
                          y="2"
                          width="8"
                          height="4"
                          rx="1"
                          ry="1"
                        ></rect>
                      </svg>
                      Copy code
                    </button>
                  </div>
                  <code lang="javascript">
                    <span className="token licence">
                      &nbsp; // SPDX-License-Identifier: GPL-3.0
                    </span>
                    <p />
                    <span className="token keyword">
                      &nbsp;
                      {"pragma solidity "}
                    </span>
                    <span className="token version">
                      &nbsp;
                      {">=0.7.0 <0.9.0;"}
                    </span>
                    <p />
                    <span className="token import">
                      &nbsp;
                      {"import"}
                    </span>
                    <span className="token ERC20">
                      &nbsp;
                      {
                        '"@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";'
                      }
                    </span>
                    <p />
                    <span className="token contract">
                      &nbsp;&nbsp;
                      {"contract KmutnbToken is ERC20PresetFixedSupply {"}
                    </span>
                    <p />
                    <span className="token operator">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"constructor("}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"string"}
                    </span>
                    <span className="token memory">
                      &nbsp;&nbsp;
                      {"memory"}
                    </span>
                    <span className="token string">
                      &nbsp;&nbsp;
                      {"name,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"string"}
                    </span>
                    <span className="token memory">
                      &nbsp;&nbsp;
                      {"memory"}
                    </span>
                    <span className="token string">
                      &nbsp;&nbsp;
                      {"symbol,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"uint256 price,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"address owner"}
                    </span>
                    <p />
                    <span className="token operator">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {")"}
                    </span>
                    <p />
                    <span className="token operator">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"ERC20PresetFixedSupply("}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"name,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"symbol,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"price,"}
                    </span>
                    <p />
                    <span className="token string">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {"owner"}
                    </span>
                    <p />
                    <span className="token operator">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {")"}
                    </span>
                    <p />
                    <span className="token operator">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{}"}
                    </span>
                  </code>
                  <p />
                  <span className="token contract">
                    &nbsp;&nbsp;
                    {"}"}
                  </span>
                  <p />
                </div>
                <p>
                  <h4>Deploy 3:</h4>
                </p>
                <p>
                  NAME : ชื่อเต็มของ Token เช่น KING MONGKUT'S UNIVERSITY OF
                  TECHNOLOGY NORTH BANGKOK.
                </p>
                <p>SYMBOL : ชื่อย่อ Token เช่น KMUTNB</p>
                <p>PRICE : จำนวน Token ที่ออก เช่น 30000000</p>
                <p>
                  OWNER : address ของผู้ดูแล เช่น
                  0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
                </p>

                <img src="images/deploy.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetRemix;
