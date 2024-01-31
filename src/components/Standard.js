import React from 'react'
import { Link } from 'react-router-dom'
import ReadContract20 from './ReadContract20'

class Standard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeSection: null,
    }
  }
  toggleVisibility = (section) => {
    this.setState((prevState) => ({
      activeSection: prevState.activeSection === section ? null : section,
    }))
  }
  render() {
    const { activeSection } = this.state
    return (
      <>
        {/* <!-- Start Banner --> */}
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>KMUTNB ERC20,ERC721,ERC1155</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}
        <form className="col-md-12">
          <div className="row">
            <div className="full paddding_left_15">
              <div className="heading_main text_align_left">
                <h2>
                  {activeSection === 'section1' && (
                    <span className="theme_color">ERC20</span>
                  )}
                  {activeSection === 'section2' && (
                    <span className="theme_color">ERC721</span>
                  )}
                  {activeSection === 'section3' && (
                    <span className="theme_color">ERC1155</span>
                  )}
                </h2>
              </div>
            </div>
            <div className="col col-link">
              {/* Button to toggle visibility of section 1 */}
              <Link
                className={`link ${
                  activeSection === 'section1' ? 'active' : ''
                }`}
                onClick={() => this.toggleVisibility('section1')}
              >
                ERC20
              </Link>
              {/* Button to toggle visibility of section 2 */}
              <Link
                className={`link ${
                  activeSection === 'section2' ? 'active' : ''
                }`}
                onClick={() => this.toggleVisibility('section2')}
              >
                ERC721
              </Link>
              {/* Button to toggle visibility of section 3 */}
              <Link
                className={`link ${
                  activeSection === 'section3' ? 'active' : ''
                }`}
                onClick={() => this.toggleVisibility('section3')}
              >
                ERC1155
              </Link>
            </div>
            <br />
            <div className="col-md-12">
            {/* Render sections based on visibility state */}
            {activeSection === 'section1' && (
                <div id="accordion">
             <ReadContract20/>
             </div>
            )}
            {activeSection === 'section2' && (
              <div>
                <h2>Section 2 Title</h2>
                <p>This is the content of section 2.</p>
              </div>
            )}
            {activeSection === 'section3' && (
              <div>
                <h2>Section 3 Title</h2>
                <p>This is the content of section 3.</p>
              </div>
            )}
            </div>
          </div>
        </form>
      </>
    )
  }
}

export default Standard
