import React from 'react'
import partnerPc from '../../../assats/mainpage/partnership/logos/partner_pc.png'
import partnerM from '../../../assats/mainpage/partnership/logos/partner_m.png'
import topIcon from '../../../assats/mainpage/partnership/top_icon.png'
import ImgLink from '../../../common/ImgLink'

import './partnership.css'

function Partnership() {
  return (
    <div className='partnership_wrap'>
      <div className='partnership_bg'>
        <div className="rayout_default">
          <div className='partner_box'>
            <div className='top_inner'>
              <div className='topicon'><ImgLink src={topIcon}/></div>
              <div className='partner_title'>Partnership</div>
              <div className='partner_sub_title'>
                오토모는 다양한 채널을 통해 고객들을 만납니다
              </div>
            </div>
            <div className='partener mobileimg'><ImgLink src={partnerM}/></div>
            <div className='partener pcimg'><ImgLink src={partnerPc}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnership