import React from 'react'
import { Link } from 'react-router-dom'

class ReadContract20 extends React.Component {
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
        <br />
        <div className="col col-link">
          <Link
            className={`link ${activeSection === 'section1' ? 'active' : ''}`}
            onClick={() => this.toggleVisibility('section1')}
          >
            Read Contract
          </Link>
          <Link
            className={`link ${activeSection === 'section2' ? 'active' : ''}`}
            onClick={() => this.toggleVisibility('section2')}
          >
            write Contract
          </Link>
        </div>
        {activeSection === 'section1' && (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Methods</th>
                <th scope="col">Details</th>
                <th scope="col">Display</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>BalanceOf(address)</td>
                <td>จำนวน Token ทั้งหมดที่ address นั้นมี</td>
                {/* <td>{this.currencyFormat(this.state.balanceOf)}</td> */}
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Decimals()</td>
                <td>หน่วยทศนิยม Token</td>
                {/* <td>{this.currencyFormat(this.state.decinals)}</td> */}
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Name()</td>
                <td>ชื่อเต็มของ Token </td>
                {/* <td>{this.state.SName}</td> */}
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Symbol()</td>
                <td>ชื่อย่อของ Token </td>
                {/* <td>{this.state.SSymbols}</td> */}
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>TotalSupply()</td>
                <td>จำนวน Token ทั้งหมดในระบบ</td>
                {/* <td>{this.currencyFormat(this.state.totalSupply)}</td> */}
              </tr>
            </tbody>
          </table>
        )}
        {activeSection === 'section2' && (
            <div className="card">
              <div className="card-header">
                <a
                  className="card-link"
                  data-toggle="collapse"
                  href="#collapseOne"
                >
                  1.Approve(address,uint256)
                </a>
              </div>
              <div
                id="collapseOne"
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
                        // value={this.state.spender}
                        // onChange={(event) => {
                        //   this.setState({ spender: event.target.value })
                        // }}
                      />
                    </div>
                    <div className="col-sm-12 card-col">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="amount (uint256)"
                        name="amount"
                        // value={this.state.amount}
                        // onChange={(event) => {
                        //   this.setState({ amount: event.target.value })
                        // }}
                      />
                    </div>
                    <div className="col-sm-12 card-col">
                      <input
                        type="submit"
                        value="Approve"
                        className="btn btn-success"
                      />
                      <p>
                        <h4>approve(address spender, uint tokens)</h4>{' '}
                        ใช้กันเงินให้อีก address
                        เหมือนกับทำแคชเชียร์เช็คโอนเงินให้ ได้ transaction log
                        กลับมา เพราะเป็นการบันทึกข้อมูลลง transaction เหมือนกับ
                        transfer()
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </>
    )
  }
}

export default ReadContract20
