import React from 'react'

import {BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill} from 'react-icons/bs'
import { Outlet, Link } from "react-router-dom";


const SideBar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
        <BsCart3 className='icon_header' />
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>x</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <Link to="/todo"><BsPeopleFill />Todo App </Link>
        </li>
         <li className='sidebar-list-item'>
          <a href=''><BsFillArchiveFill /> Products</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''><BsFillGrid3X3GapFill /> Categories</a>
        </li>
        <li className='sidebar-list-item'>
          <a href='/todo'><BsPeopleFill />Todo App </a>
          
        </li>
       <li className='sidebar-list-item'>
          <a href=''><BsListCheck />Inventory </a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''><BsMenuButtonWideFill /> Report</a>
        </li>
        <li className='sidebar-list-item'>
          <a href=''><BsFillGearFill /> Setting</a>
        </li>

      </ul>


    </aside>
  )
}

export default SideBar