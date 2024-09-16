import React from 'react'
import "./Blogging.css"
import Symbol1 from "../assets/Image.png"
import Symbol2 from "../assets/Image_1.png"
import Symbol3 from "../assets/Image_2.png"
import Icon from "../assets/Icon_wrap.png"
import Avatar1 from "../assets/Avatar_1.png"
import Avatar2 from "../assets/Avatar_2.png"
import Avatar3 from "../assets/Avatar_3.png"

const Blogging = () => {
  return (
    <div>
        <div className='top'>
            <p style={{color:"#6941C6"}}>Our blog</p>
            <button style={{backgroundColor:"#6941C6",color:"white",borderRadius:"5px",border:"1px solid white",height:"40px"}}>View all posts</button>
        </div>
        <p style={{fontWeight:"600",fontHeight:"36px",textAlign:"left",marginLeft:"2vw"}}>Lastest blog posts</p>
        <p style={{color:"#475467",textAlign:"left",marginLeft:"2vw"}}>Tool and strategies modern teams need to help their companies grow.</p>
        <div className='features_Container'>
        <div className='card'>
            <img className='img1' src={Symbol1} alt="symbol"/>
            <p style={{fontWeight:"600",fontSize:"20px",color:"#6941C6",textAlign:"left"}}>Design</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>UX review presentations</p>
            <img src={Icon} alt="icon" style={{height:"40px"}}/>
            </div>
            <p style={{color:"#475467",textAlign:"left"}}>How do you create compelling presentations that wow your colleagues and impress your managers? </p>
            <div style={{ display: "flex", alignItems: "center"}}>
            <img  src={Avatar1} alt="avatar1" style={{ height: "40px", width: "40px", marginRight: "1rem" }} />
            <div>
              <p style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>Olivia Rhye</p>
              <p style={{ color: "#475467", margin: 0 }}>20 Jan 2024</p>
            </div>
          </div>
        </div>
        <div className='card'>
            <img className='img1' src={Symbol2} alt="symbol"/>
            <p style={{fontWeight:"600",fontSize:"20px",color:"#6941C6",textAlign:"left"}}>Product</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>Migrating to Linear 101</p>
            <img src={Icon} alt="icon"style={{height:"40px"}}/>
        </div>
        <p style={{color:"#475467",textAlign:"left"}}>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.</p> 
        <div style={{ display: "flex", alignItems: "center"}}>
            <img src={Avatar2} alt="avatar2" style={{ height: "40px", width: "40px", marginRight: "1rem" }} />
            <div>
              <p style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>Phoenix Baker</p>
              <p style={{ color: "#475467", margin: 0 }}>19 Jan 2024</p>
            </div>
          </div>  
        </div>
            <div className='card'>
            <img className='img1' src={Symbol3} alt="symbol"/>
            <p style={{fontWeight:"600",fontSize:"20px",color:"#6941C6",textAlign:"left"}}>Software Engineering</p>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>Building your API stack</p>
            <img src={Icon} alt="icon"style={{height:"40px"}}/>
        </div>
        <p style={{color:"#475467",textAlign:"left"}}>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.</p> 
        <div style={{ display: "flex", alignItems: "center"}}>
            <img src={Avatar3} alt="avatar3" style={{ height: "40px", width: "40px", marginRight: "1rem" }} />
            <div>
              <p style={{ fontWeight: "600", fontSize: "14px", margin: 0 }}>Lana Steiner</p>
              <p style={{ color: "#475467", margin: 0 }}>18 Jan 2024</p>
            </div>
          </div>     
        </div>
        </div>
    </div>
  )
}

export default Blogging