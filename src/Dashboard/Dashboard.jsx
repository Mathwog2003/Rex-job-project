import React, { useState } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import Home from './Home'

const Dashboard = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
       <Header OpenSidebar={OpenSidebar}/>
       <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
       <Home />
    </div>
  )
}

export default Dashboard