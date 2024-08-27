import React from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsLockFill, BsSignIntersectionFill, BsSignTurnSlightLeftFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import logo from './assets/PSD-removebg-preview.png';



function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
        <img  src={logo} alt="Logo" style={{ width: '100px', height: 'auto', display: 'block', margin: '0 auto' }} className="logo" /><p>Tool</p>
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
        <Link to="/home">
            <BsGrid1X2Fill className="icon" />Dashboard
          </Link>
        </li>
       
        <li className="sidebar-list-item">
        <Link to="/UserManagement">
        <BsPeopleFill className="icon" />Users
        </Link>
        </li>

        <li className="sidebar-list-item">
        <Link to="/Signin">
          <BsSignIntersectionFill className="icon" />Add new user
        </Link>
        </li>
      
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" />Purchase Order
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillGearFill className="icon" />Settings
          </a>
        </li>
        <li className="sidebar-list-item">
        <Link to="/">
        <BsSignTurnSlightLeftFill className="icon" />Log out
        </Link>
        </li>
      
      </ul>
    </aside>
  )
}

export default Sidebar