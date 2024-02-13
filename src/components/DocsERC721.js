import React from 'react'

class DocsERC721 extends React.Component {
  render() {
    return (
      <>
        <div className="card">
          <div className="card-header">
            <a className="card-link" data-toggle="collapse" href="#collapseSix">
              Smart Contract ERC721
            </a>
          </div>
          <div
            id="collapseSix"
            className="collapse hide"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <h4>1. balanceOf(เจ้าของที่อยู่) -> uint256 :</h4>
                  </p>
                  <p>
                    ฟังก์ชันนี้จะส่งคืนจำนวน Token ที่เป็นของที่อยู่เฉพาะ (
                    owner)
                    {/* <a
                      className="btn btn-success"
                      href="https://chrome.google.com/webstore/category/extensions"
                    >
                      chrome เว็บสโตร์
                    </a> */}
                  </p>
                  <p>
                    <h4>2 ownerOf(uint256 tokenId) -> address :</h4>
                  </p>
                  <p>
                    ด้วยรหัส Token ( tokenId)
                    ฟังก์ชันนี้จะส่งคืนที่อยู่ของเจ้าของ Token นั้น
                  </p>
                  <p>
                    <h4>3.approve(address to, uint256 tokenId) :</h4>
                  </p>
                  <p>
                    ฟังก์ชันนี้อนุญาตให้ที่อยู่ ( to)
                    ได้รับการอนุมัติเพื่อถ่ายโอน Token เฉพาะ ( tokenId)
                    ที่ผู้ส่งเป็นเจ้าของ
                    มันตั้งค่าที่อยู่ที่ได้รับอนุมัติสำหรับ Token ที่ระบุ
                  </p>
                  <p>
                    <h4>4.getApproved(uint256 tokenId) -> address :</h4>
                  </p>
                  <p>
                    ส่งคืนที่อยู่ที่ได้รับอนุมัติให้ถ่ายโอน Token เฉพาะ (
                    tokenId)
                  </p>
                  <p>
                    <h4>
                      5.setApprovalForAll(address operator, bool approved) :
                    </h4>
                  </p>
                  <p>
                    ฟังก์ชันนี้ช่วยให้เจ้าของ Token ของผู้โทรอนุมัติหรือเพิกถอนการอนุมัติสำหรับผู้ปฏิบัติงาน
                    ( operator) เพื่อจัดการ Token ทั้งหมดของตัวเอง
                  </p>
                  <p>
                    <h4>
                      6.isApprovedForAll(address owner, address operator) ->
                      bool :
                    </h4>
                  </p>
                  <p>
                    ส่งคืนว่าตัวดำเนินการ ( operator) ได้รับอนุมัติจากเจ้าของ (
                    owner) ให้จัดการ Token ทั้งหมดหรือไม่
                  </p>
                  <p>
                    <h4>
                      7.transferFrom(address from, address to, uint256 tokenId):
                    </h4>
                  </p>
                  <p>
                    โอนความเป็นเจ้าของ Token เฉพาะ ( tokenId) จากที่อยู่หนึ่ง (
                    from) ไปยังที่อยู่อื่น ( to)
                    ผู้โทรต้องได้รับการอนุมัติจึงจะโอน Token ได้
                  </p>
                  <p>
                    <h4>
                      8.safeTransferFrom(address from, address to, uint256
                      tokenId) :
                    </h4>
                  </p>
                  <p>
                    คล้ายกับ transferFrom() แต่ตรวจสอบเพิ่มเติมว่า to เป็นสัญญาอัจฉริยะหรือไม่
                    และหากเป็นเช่นนั้น ให้เรียกใช้ onERC721Received() ฟังก์ชัน
                    ของผู้รับ
                  </p>
                  <p>
                    <h4>
                      9.safeTransferFrom(address from, address to, uint256
                      tokenId, bytes memory data) :
                    </h4>
                  </p>
                  <p>
                    คล้ายกับ safeTransferFrom(address from, address to, uint256
                    tokenId) แต่มีdataพารามิเตอร์เพิ่มเติมซึ่งสามารถใช้เพื่อส่งข้อมูลที่กำหนดเองไปยังสัญญาผู้รับได้
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

export default DocsERC721
