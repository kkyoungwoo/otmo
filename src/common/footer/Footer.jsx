import React from 'react'
import whitelogo from '../../assats/common/white_logo.png'
import ImgLink from '../ImgLink'

import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='rayout_default'>
        <div className='footer_box'>
          <div className='footer_img_box'>
            <ImgLink src={whitelogo} />
          </div>
          <div className='footer_inner'>
            <div className='footer_text'>
              <div>오트모</div>
              <div>주소 : 대구광역시 중구 남산로 49 3층</div>
            </div>
            <div className='footer_text'>
              <div>대표: 박유현</div>
              <div>사업자등록번호 : 000-00-00000</div>
              <div>개인정보관리자 : 고경우</div>
            </div>
            <div className='footer_text'>
              <div>대표번호 : 053-253-9399</div>
              <div>팩스번호 : 053-253-9397</div>
              <div>메일 : otmo@otmo.kr</div>
            </div>
            <div className='footer_text_third'>
              OTMO ALL right reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer