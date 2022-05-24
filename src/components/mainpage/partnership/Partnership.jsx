import React from 'react'
import partnerPc from '../../../assats/mainpage/partnership/logos/partner_pc.png'
import partnerM from '../../../assats/mainpage/partnership/logos/partner_m.png'
import ImgLink from '../../../common/ImgLink'

import './partnership.css'

function Partnership() {
  return (
    <div className='partnership_wrap'>
      <div className='partnership_bg'>
        <div className="rayout_default">
          <div className='partner_box'>
            Partnership
            <div className='partener mobileimg'><ImgLink src={partnerM}/></div>
            <div className='partener pcimg'><ImgLink src={partnerPc}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partnership