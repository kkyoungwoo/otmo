import React from 'react'
import shout from '../../assats/common/estimate/shout.png'
import arrow from '../../assats/common/estimate/arrow.png'

import ImgLink from '../ImgLink'
import './estimate.css'

function Estimate() {
  return (
    <div className='estimate_wrap'>
      <div className='estimate_bg'>
        <div className="rayout_default">
          <div className='estimate_wrap'>
            <ImgLink src={shout}/>
            <div className='estimate_title'>
              <div>문의 전,</div>
              <div>견적 알아보세요</div>
            </div>
            <div className='estimate_subtitle'>
              <div>내게 꼭 필요한 솔루션만!</div>
              <div>합리적인 오트모 견적 계산하기</div>
            </div>
            <div>
              <ImgLink src={arrow}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Estimate