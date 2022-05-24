import React from 'react'
import topIcon from '../../../assats/mainpage/members/top_icon.png'
import cloudBottom from '../../../assats/mainpage/members/cloud_bottom.png'
import cloudTop from '../../../assats/mainpage/members/cloud_top.png'


import ImgLink from '../../../common/ImgLink'
import MembersCard from './members_card/MembersCard'

import './members.css'


function Members() {
  return (
    <div className='members_wrap'>
      <div className='members_bg'>
        <div className="rayout_default">
          <div className='member_inner_top'>
            <div className='title'>
              <div className='roket'><ImgLink src={topIcon}/></div>
              <div>당신만을 위한 <span>전문가</span></div>
            </div>
            <MembersCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members