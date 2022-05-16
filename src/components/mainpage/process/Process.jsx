import React from 'react'
import icon from '../../../assats/mainpage/process/icon_top.png'
import ImgLink from '../../../common/ImgLink'
import ProcessCards from './processcards/ProcessCards'

import './process.css'

function Process() {
  return (
    <div className='process_wrap'>
      <div className='process_bg'>
        <div className="rayout_default">
          <div className='process_inner'>
            <div className='process_icon'><ImgLink src={icon} /></div>
            <div className='process_title'>
              <div><span>체계적인</span></div>
              <div>서비스 프로세스</div>
            </div>
            <div>
              오트모는 성공적인 온라인 커머스를 위하여
              <br/>제품과의 현황을 면밀하게 분석하고,
              <br/>체계적인 프로세스를 통해 효과적인 솔루션을 제공합니다
            </div>
          </div>
          <div>
            <ProcessCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process