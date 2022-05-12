import React from 'react';
import ImgLink from '../../../common/ImgLink'
import './banner.css'

import handphone from '../../../assats/mainpage/banner/handphone.png'
import harth from '../../../assats/mainpage/banner/harth.png'
import message_bottom from '../../../assats/mainpage/banner/message_bottom.png'
import message_top from '../../../assats/mainpage/banner/message_top.png'
import roket from '../../../assats/mainpage/banner/roket.png'

function Banner() {
  return (
    <div className='banner_wrap'>
      <div className='banner_bg'>
        <div className='rayout_default'>
          <div className='banner_content'>
            <div className='banner_left'>
              <div><ImgLink src={roket} /></div>
              <div className='left_title'>
                <div className=''>오트모는</div>
                <div>제품을 <span>팔리게</span> 만듭니다</div>
              </div>
              <div className='left_subtitle'>
                GET YOUR ONLINE ATMOSPHERE
              </div>
            </div>
            <div className='banner_right'>
              <div className='img_box'>
                <div><ImgLink src={handphone} /></div>
                <div><ImgLink src={harth} /></div>
                <div><ImgLink src={message_bottom} /></div>
                <div><ImgLink src={message_top} /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner