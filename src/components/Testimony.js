import React from 'react'
import"./Testimony.css"
import Logo from "../assets/Logomark-7.png"
import Avatar from "../assets/Avatar.png"
const Testimony = () => {
  return (
    <div style={{backgroundColor:"#F9FAFB",marginBottom:"2rem"}}>
        <div className='fictional_logo'>
            <img  src={Logo} alt="logo"/>
            <p>Sisyphus</p>
        </div>
        <div style={{marginLeft:"2rem",marginRight:"2rem"}}>
        <p  style={{fontWeight:"500",fontSize:"48px"}}>We’ve been using Untitled to kick start every new project and can’t imagine working without it.</p>
        </div>
        <img src={Avatar} alt="avatar"/>
        <p style={{fontWeight:"600",fontSize:"18px"}}>Candice Wu</p>
        <p style={{color:"#475467"}}>Product Manager, Sisyphus</p>
    </div>
  )
}

export default Testimony