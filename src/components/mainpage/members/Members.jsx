import React from 'react'
import topIcon from '../../../assats/mainpage/members/top_icon.png'
import cloudBottom from '../../../assats/mainpage/members/cloud_bottom.png'
import cloudTop from '../../../assats/mainpage/members/cloud_top.png'

import olaf from '../../../assats/mainpage/members/member/olaf.png'
import donald from '../../../assats/mainpage/members/member/donald.png'
import rudolf from '../../../assats/mainpage/members/member/rudolf.png'
import stitch from '../../../assats/mainpage/members/member/stitch.png'
import tweety from '../../../assats/mainpage/members/member/tweety.png'

import ImgLink from '../../../common/ImgLink'
import MembersCard from './members_card/MembersCard'

import './members.css'

const memberData = [
  {
    team: "MD팀",
    imgsrc: tweety,
    subText: [<div>상품을 기획하고, 각종 채널을 통해<br/>효과적으로 고객에게 판매합니다.</div>]
  },
  {
    team: "디자인팀",
    imgsrc: donald,
    subText: [<div>브랜드 아이덴티티와 고객 경험을<br/>고려하여 디자인합니다</div>]
  },
  {
    team: "마케팅팀",
    imgsrc: stitch,
    subText: [<div>고객 친화적인 퍼포먼스와 분석으로<br/>제품을 소비자에게 노출시킵니다</div>]
  },
  {
    team: "개발팀",
    imgsrc: rudolf,
    subText: [<div>다양한 개발 언어로<br/>브랜드에 최적화된 개발을 합니다</div>]
  },
  {
    team: "경영지원팀",
    imgsrc: olaf,
    subText: [<div>기업컨설팅, 발주관리, CS까지<br/>내 브랜드라고 생각하고 케어합니다</div>]
  },
]

function Members() {
  return (
    <div className='members_wrap'>
      <div className='members_bg'>
        <div className="rayout_default">
          <div className='member_inner_top'>
            <div className='title'>
              <div><ImgLink src={topIcon}/></div>
              <div>당신만을 위한 <span>전문가</span></div>
            </div>
            <MembersCard memberData={memberData}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members