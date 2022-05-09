import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
  return (
    <div>
      <div>
        <div className="logo">otmo</div>
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