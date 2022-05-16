import React from 'react'
import { Link } from 'react-router-dom'
import blacklogo from '../../assats/common/black_logo.png'
import ImgLink from '../ImgLink'
import './top.css'

function Top() {
  return (
    <div className='top_wrap'>
      <div className='rayout_default'>
        <div className='top_items'>
          <Link to='/' className="logo"><ImgLink src={blacklogo} /></Link>
          <div className="nav">
            <ul className='nav_wrap'>
              <li><Link to='about'>about</Link></li>
              <li><Link to='team'>team</Link></li>
              <li><Link to='contect'>contect</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top