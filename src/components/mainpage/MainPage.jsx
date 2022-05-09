import React from 'react'
import { Link } from 'react-router-dom'

import Estimate from '../../common/estimate/Estimate'
import Banner from './banner/Banner'
import Members from './members/Members'
import Partnership from './partnership/Partnership'
import Process from './process/Process'

function MainPage() {
  return (
    <div>
        <Banner />
        <Members />
        <Partnership />
        <Process />
        
        <Estimate />
    </div>
  )
}

export default MainPage