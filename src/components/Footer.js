import React from "react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <footer className="footer-box">
          <div className="container">
            <div className="row">
              <div className="col-md-12 white_fonts">
                <div className="row">
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="full">
                      <img
                        className="logofooter"
                        src="../images/cis.png"
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="full">
                      <h3>Quick Links</h3>
                    </div>
                    <div className="full">
                      <ul className="menu_footer">
                        <li>
                          <Link to="/">Smart Contract</Link>
                        </li>
                        <li>
                          <Link to="/erc20">Document</Link>
                        </li>
                        <li>
                          <Link to="/example">Example</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="full">
                      <div className="footer_blog full white_fonts">
                        <h3>Newsletter</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do
                        </p>
                        <div className="newsletter_form">
                          <form action="index.html">
                            <input
                              type="email"
                              placeholder="Your Email"
                              name="#"
                              required=""
                            />
                            <button>Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-6 col-lg-3">
                    <div className="full">
                      <div className="footer_blog full white_fonts">
                        <h3>Contact us</h3>
                        <ul className="full">
                          <li>
                            <img src="../images/i5.png" />
                            <span>
                              Pracharat 1 Road,Wongsawang, Bangsue
                              <br />
                              Bangkok 10800
                            </span>
                          </li>
                          <li>
                            <img src="../images/i6.png" />
                            <span>demo@kmutnb.co.th</span>
                          </li>
                          <li>
                            <img src="../images/i7.png" />
                            <span>+66 2 555-2000</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* <!-- End Footer --> */}

        <div className="footer_bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="crp">
                  © Copyrights 2019 design by Suradath.design
                </p>
              </div>
            </div>
          </div>
        </div>

        <a href="#" id="scroll-to-top" className="hvr-radial-out">
          <i className="fa fa-angle-up"></i>
        </a>
      </>
    );
  }
}

export default Footer;
