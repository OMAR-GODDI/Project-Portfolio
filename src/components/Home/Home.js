
import React  from 'react'
import ReactTypingEffect from "react-typing-effect"
import video from "./video.mp4"


function Home() {
   
    return (
    <React.Fragment>
        <div className="showcase">
        <div className="header1">
            <h2 className="logo">portfolio</h2>
            
            </div>
        
        <video className="mp4" src={video} muted loop autoPlay></video>
        <div className="overlay"></div>
        <div className="text">
            <h2 className="titleName"><span> i'm</span> omar goddi  </h2> 
            <span className="String"> i'm a </span><ReactTypingEffect className="String"
            text= " full stack developer" 
            typingDelay = {100}   
            eraseDelay = {100}
        />
         
        
        </div>
     
        <a href="/about" class="btn btn-about">more about me</a>
     
        <ul className="social">
            <li><a href="https://www.facebook.com/omar.goddi/"><img src="https://i.ibb.co/x7P24fL/facebook.png"/></a></li>
            <li><a href="https://www.linkedin.com/in/omar-goddi-655478166/"><i className="fab fa-linkedin"></i></a></li>
           
            </ul>
            </div>

       
        </React.Fragment>
        
    )
    
}


export default Home














 
  