import React from 'react'
import Logo from "../../assets/logo.png"
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <img src={Logo}alt="" />
        <ul className="header-menu">
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testionials</li>
        </ul>
    </div>
  )
}

export default Header