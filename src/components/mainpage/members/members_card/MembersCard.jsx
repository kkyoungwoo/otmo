import React from 'react'
import ImgLink from '../../../../common/ImgLink'

import './members_card.css'

function MembersCard(props) {
  return (
    <div className='member_data_wrap'>
      {props.memberData.map((item,idx)=> {
        return(
          <div className='member_data_card' key={idx}>
            <div>{item.team}</div>
            <div>{item.subText}</div>
            <ImgLink src={item.imgsrc} />
          </div>
        )
      })}
    </div>
  )
}

export default MembersCard