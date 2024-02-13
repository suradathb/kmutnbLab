import React from 'react'

class DocsERC1155 extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseSaven">
              Smart Contract ERC1155
            </a>
          </div>
          <div
            id="collapseSaven"
            className="collapse hide"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <h4>
                      1. balanceOf(address _owner, uint256 _id) -> uint256:
                    </h4>
                  </p>
                  <p>
                    ส่งกลับยอดคงเหลือของ Token เฉพาะ ( _id)
                    ที่เป็นของที่อยู่เฉพาะ ( _owner)
                    {/* <a
                      className="btn btn-success"
                      href="https://chrome.google.com/webstore/category/extensions"
                    >
                      chrome เว็บสโตร์
                    </a> */}
                  </p>
                  <p>
                    <h4>
                      2 balanceOfBatch(address[] memory _owners, uint256[]
                      memory _ids) -> uint256[] memory:
                    </h4>
                  </p>
                  <p>
                    ส่งกลับยอดคงเหลือของ Token หลายรายการ ( _ids) แบบหลายที่อยู่
                    ( ) ที่เป็นของ _owners ในแบตช์
                  </p>
                  <p>
                    <h4>
                      3.setApprovalForAll(address _operator, bool _approved):
                    </h4>
                  </p>
                  <p>
                    อนุญาตให้ผู้ดำเนินการ ( _operator)
                    จัดการ Token ทั้งหมดของผู้ส่ง
                    พารามิเตอร์ _approved ระบุว่าการอนุมัติได้รับหรือเพิกถอน
                  </p>
                  <p>
                    <h4>
                      4.isApprovedForAll(address _owner, address _operator) ->
                      bool:
                    </h4>
                  </p>
                  <p>
                    ส่งคืนว่าตัวดำเนินการ ( _operator) ได้รับอนุมัติจากเจ้าของ (
                    _owner) ให้จัดการ Token ทั้งหมดหรือไม่
                  </p>
                  <p>
                    <h4>
                      5.safeTransferFrom(address _from, address _to, uint256
                      _id, uint256 _amount, bytes memory _data):
                    </h4>
                  </p>
                  <p>
                    โอนจำนวนที่ระบุ ( _amount) ของ Token ( _id) จากผู้ส่ง (
                    _from) ไปยังผู้รับ ( _to)
                    นอกจากนี้ยังรองรับข้อมูลเพิ่มเติมที่จะส่งไปยังผู้รับ
                  </p>
                  <p>
                    <h4>
                      6.safeBatchTransferFrom(address _from, address _to,
                      uint256[] memory _ids, uint256[] memory _amounts, bytes
                      memory _data):
                    </h4>
                  </p>
                  <p>
                    โอน Token หลายรายการ ( _ids) ด้วยจำนวนที่สอดคล้องกัน (
                    _amounts) จากผู้ส่ง ( _from) ไปยังผู้รับ ( _to)
                    นอกจากนี้ยังรองรับข้อมูลเพิ่มเติมที่จะส่งไปยังผู้รับ
                  </p>
                  <p>
                    <h4>
                      7.mint(address _to, uint256 _id, uint256 _amount, bytes
                      memory _data):
                    </h4>
                  </p>
                  <p>
                    สร้าง Token ใหม่ ( _id) และกำหนดให้กับที่อยู่ที่ระบุ ( _to)
                    ด้วยจำนวนที่ระบุ ( _amount)
                    นอกจากนี้ยังรองรับข้อมูลเพิ่มเติมที่เกี่ยวข้องกับการดำเนินการสร้างเหรียญอีกด้วย
                  </p>
                  <p>
                    <h4>
                      8.mintBatch(address _to, uint256[] memory _ids, uint256[]
                      memory _amounts, bytes memory _data):
                    </h4>
                  </p>
                  <p>
                    สร้าง Token หลายรายการ ( _ids) และกำหนดให้กับที่อยู่ที่ระบุ (
                    _to) ด้วยจำนวนเงินที่สอดคล้องกัน ( _amounts)
                    นอกจากนี้ยังรองรับข้อมูลเพิ่มเติมที่เกี่ยวข้องกับการดำเนินการสร้างเหรียญอีกด้วย
                  </p>
                  <p>
                    <h4>
                      9.burn(address _from, uint256 _id, uint256 _amount):
                    </h4>
                  </p>
                  <p>
                    ทำลายจำนวนที่ระบุ ( _amount) ของ Token ( _id)
                    ที่ผู้ส่งเป็นเจ้าของ ( _from)
                  </p>
                  <p>
                    <h4>
                      10.burnBatch(address _from, uint256[] memory _ids,
                      uint256[] memory _amounts):
                    </h4>
                  </p>
                  <p>
                    ทำลาย Token หลายรายการ ( _ids) ด้วยจำนวนที่สอดคล้องกัน (
                    _amounts) ที่ผู้ส่งเป็นเจ้าของ ( _from)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default DocsERC1155
