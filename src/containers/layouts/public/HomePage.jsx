import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderNav,FooterNav } from '../partials'

const HomePage = () => {
  return (
    <div>
        <HeaderNav/>
        <div>
            <Outlet/>
        </div>
        <FooterNav/>
    </div>
  )
}

export default HomePage