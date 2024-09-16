import React from 'react'
import "./Footer.css"
import Logo from "../assets/Logo.png";
const Footer = () => {
  return (
    <div>
        <div className='container'>
            <div className='product'>
                <p style={{color:"#667085"}}>Product</p>
                <p>overview</p>
                <p>Features</p>
                <p>Solutions</p>
                <p>Tutorials</p>
                <p>Pricing</p>
                <p>Releases</p>
            </div>
            <div className='company'> 
            <p style={{color:"#667085"}}>Company</p> 
            <p>About us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
            <p>Media kit</p>
            <p>Contact</p>
            </div>
            <div className='resources'>
            <p style={{color:"#667085"}}>Resources</p> 
            <p>Blog</p>
            <p>Newsletter</p>
            <p>Events</p>
            <p>Help centre</p>
            <p>Tutorials</p>
            <p>Support</p>
            </div>
            <div className='usecases'>
            <p style={{color:"#667085"}}>Use cases</p> 
            <p>Startups</p>
            <p>Enterprise</p>
            <p>Government</p>
            <p>SaaS centre</p>
            <p>Marketplaces</p>
            <p>Ecommerce</p>
            </div>
            <div className='social'>
            <p style={{color:"#667085"}}>Social</p> 
            <p>Twitter</p>
            <p>Facebook</p>
            <p>GitHub</p>
            <p>AngelList</p>
            <p>Dribbble</p>
            <p>Linkedin</p>
            </div>
            <div className='legal'>
            <p style={{color:"#667085"}}>Legal</p> 
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Licenses</p>
            <p>Settings</p>
            <p>Contact</p>
            </div>
        </div>
        <div className='foot'>
            <div className="logo">
              <img src={Logo} alt="Logo" />
              <span className="logo-text" style={{color:"black"}}>Untitled UI</span>
            </div>
            <div>
              <p style={{color:"#667085"}}>© 2077 Untitled UI. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer