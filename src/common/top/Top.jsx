import React from 'react'
import { Link } from 'react-router-dom'
import blacklogo from '../../assats/common/black_logo.png'
import ImgLink from '../ImgLink'

function Top() {
  return (
    <div>
      <div>
        <div className="logo"><ImgLink src={blacklogo} /></div>
        <div className="nav">
          <ul>
            <li><Link to='/'>otmo</Link></li>
            <li><Link to='about'>about</Link></li>
            <li><Link to='team'>team</Link></li>
            <li><Link to='contect'>contect</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Top