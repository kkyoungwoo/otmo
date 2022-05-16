import React from 'react'
import { Link } from 'react-router-dom'

import Estimate from '../../common/estimate/Estimate'
import Banner from './banner/Banner'
import Members from './members/Members'
import Partnership from './partnership/Partnership'
import Process from './process/Process'

function MainPage() {
  return (
    <div className='mainpage_wrap'>
      <Banner />
      <Process />
      <Members />
      <Partnership />

      <Estimate />
    </div>
  )
}

export default MainPage