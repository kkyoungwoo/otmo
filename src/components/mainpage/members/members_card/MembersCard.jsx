import React from 'react'
import ImgLink from '../../../../common/ImgLink'

import olaf from '../../../../assats/mainpage/members/member/olaf.png'
import donald from '../../../../assats/mainpage/members/member/donald.png'
import rudolf from '../../../../assats/mainpage/members/member/rudolf.png'
import stitch from '../../../../assats/mainpage/members/member/stitch.png'
import tweety from '../../../../assats/mainpage/members/member/tweety.png'

import './members_card.css'

const memberData = [
  {
    team: "MD팀",
    imgsrc: tweety,
    subText: ["<div>상품을 기획하고, 각종 채널을 통해<br/>효과적으로 고객에게 판매합니다.</div>"]
  },
  {
    team: "디자인팀",
    imgsrc: donald,
    subText: ["<div>브랜드 아이덴티티와 고객 경험을<br/>고려하여 디자인합니다</div>"]
  },
  {
    team: "마케팅팀",
    imgsrc: stitch,
    subText: ["<div>고객 친화적인 퍼포먼스와 분석으로<br/>제품을 소비자에게 노출시킵니다</div>"]
  },
  {
    team: "개발팀",
    imgsrc: rudolf,
    subText: ["<div>다양한 개발 언어로<br/>브랜드에 최적화된 개발을 합니다</div>"]
  },
  {
    team: "경영지원팀",
    imgsrc: olaf,
    subText: ["<div>기업컨설팅, 발주관리, CS까지<br/>내 브랜드라고 생각하고 케어합니다</div>"]
  },
]

function MembersCard() {
  return (
    <div className='member_data_wrap'>
      {memberData.map((item,idx)=> {
        return(
          <div className='member_data_cards' key={idx}>
            <div className='member_team'>{item.team}</div>
            <div className='member_subtext' dangerouslySetInnerHTML={{__html: item.subText}}></div>
            <div className='member_img'><ImgLink src={item.imgsrc} /></div>
          </div>
        )
      })}
    </div>
  )
}

export default MembersCard