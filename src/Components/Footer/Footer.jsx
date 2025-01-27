import React from 'react'
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"
import LinkedIn from "../../assets/linkedin.png"
import Logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <div className="footer-container">
        <hr />
        <div className='footer'>
           <div className="social-link">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
           </div>
           <div className="logo-f">
            <img src={Logo} alt="" />
        </div>
        </div>
        
    </div>
  )
}

export default Footer