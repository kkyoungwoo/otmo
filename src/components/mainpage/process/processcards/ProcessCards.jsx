import React from "react"
import firstOne from '../../../../assats/mainpage/process/first/one.png'
import firstTwo from '../../../../assats/mainpage/process/first/two.png'
import firstThree from '../../../../assats/mainpage/process/first/three.png'

import secoundOne from '../../../../assats/mainpage/process/secound/one.png'
import secoundTwo from '../../../../assats/mainpage/process/secound/two.png'
import secoundThree from '../../../../assats/mainpage/process/secound/three.png'

import threeOne from '../../../../assats/mainpage/process/thred/one.png'
import threeTwo from '../../../../assats/mainpage/process/thred/two.png'
import threeThree from '../../../../assats/mainpage/process/thred/three.png'

import fourthOne from '../../../../assats/mainpage/process/fourth/one.png'
import fourthTwo from '../../../../assats/mainpage/process/fourth/two.png'
import fourthThree from '../../../../assats/mainpage/process/fourth/three.png'

import ImgLink from '../../../../common/ImgLink'

import './processcards.css'

const ProcessCardsData = [
    {
        cardNum: "01",
        title: "준비 단계",
        subtitle: ["<div>온라인 제품 판매를 위해</br>전반적인 준비를 하는 단계입니다</div>"],
        icon_first_name: "키워드 분석",
        icon_first_src: firstOne,
        icon_secound_name: "브랜딩 / 패키징",
        icon_secound_src: firstTwo,
        icon_three_name: "사진 / 영상촬영",
        icon_three_src: firstThree
    },
    {
        cardNum: "02",
        title: "입점 단계",
        subtitle: ["<div>마켓 등록 등 온라인 시장에 진입,</br>판매를 시작하는 시기입니다</div>"],
        icon_first_name: "업체 SNS 개설",
        icon_first_src: secoundOne,
        icon_secound_name: "홈페이지 제작",
        icon_secound_src: secoundTwo,
        icon_three_name: "오픈마켓 세팅 / 입점",
        icon_three_src: secoundThree
    },
    {
        cardNum: "03",
        title: "탐색 단계",
        subtitle: ["<div>마케팅을 진행하며 적합한</br>마케팅 경로를 탐색하는 시기입니다</div>"],
        icon_first_name: "스토어 / 상품 상위노출",
        icon_first_src: threeOne,
        icon_secound_name: "프로모션 / 특가딜 제안",
        icon_secound_src: threeTwo,
        icon_three_name: "SNS 이벤트 / 마케팅",
        icon_three_src: threeThree
    },
    {
        cardNum: "04",
        title: "운영 단계",
        subtitle: ["<div>효과적인 마케팅 경로를 찾아</br>지속적으로 관리가 진행되는 단계입니다</div>"],
        icon_first_name: "지속적 SNS 마케팅",
        icon_first_src: fourthOne,
        icon_secound_name: "프로모션 / 특가딜 운영",
        icon_secound_src: fourthTwo,
        icon_three_name: "고객관리",
        icon_three_src: fourthThree
    },
]

function ProcessCards() {
    return (
      <div className='process_cards'>
          <div className="cards_warp">
              {ProcessCardsData.map((item,idx)=>{
                  return(
                      <div className="cards" key={idx}>
                          <div className="card_num">
                            <div>{item.cardNum}</div>
                          </div>
                          <div className="card_title">
                            {item.title}
                          </div>
                          <div className="cards_description" dangerouslySetInnerHTML={{__html: item.subtitle}}></div>
                          <div className="cards_inner">
                            <div className="cards_imgbox">
                                <ImgLink src={item.icon_first_src}/>
                            </div>
                            <div className="cards_text_box">{item.icon_first_name}</div>
                          </div>
                          <div className="cards_inner">
                            <div className="cards_imgbox">
                                <ImgLink src={item.icon_secound_src}/>
                            </div>
                            <div className="cards_text_box">{item.icon_secound_name}</div>
                          </div>
                          <div className="cards_inner">
                            <div className="cards_imgbox">
                                <ImgLink src={item.icon_three_src}/>
                            </div>
                            <div className="cards_text_box">{item.icon_three_name}</div>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
    )
  }
  
  export default ProcessCards