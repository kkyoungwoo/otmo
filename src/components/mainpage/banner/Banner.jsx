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
    <div>
      <div className='links-container'>
      <ImgLink src={handphone} />
      <ImgLink src={harth} />
      <ImgLink src={message_bottom} />
      <ImgLink src={message_top} />
      <ImgLink src={roket} />
      </div>
    </div>
  )
}

export default Banner