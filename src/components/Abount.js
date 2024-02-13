import React from "react";
import SetMetamask from "./SetMetamask";
import SetStockData from "./SetStockData";
import SetChome from "./SetChome";
import SetRemix from "./SetRemix";
import "./Abount.css";
import DocsERC721 from "./DocsERC721";
import DocsERC1155 from "./DocsERC1155";

class Abount extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Banner --> */}
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>Document</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}
        <div className="section layout_padding about_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="full paddding_left_15">
                  <div className="heading_main text_align_left">
                    <h2>Document Tools SetUp</h2>
                  </div>
                </div>
              </div>
            </div>
            <SetChome />
            <SetMetamask />
            <SetStockData />
            <SetRemix />
            <DocsERC721 />
            <DocsERC1155 />
          </div>
        </div>
        {/* <!-- end section --> */}
      </>
    );
  }
}

export default Abount;
