import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
        Header
        <Outlet/>
        footer
    </div>
  )
}

export default Layout