import React from 'react'
// import { useContext } from 'react';
// import { WebContext } from '../../App';

import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import  './landing.css'
import NavBar from '../../common/NavBar/NavBar';

function Landing() {
  // const data = useContext(WebContext);
  return (
    <div>
      <div className="nav-info">
      {/* <img src={data.logo[0].logoImgurl} className="logo-img" alt="Logo" /> */}
      <img src="/images/NavBar/logo.png"className='logo-img' alt="logo" />
      <div className="mail">
      <div className="contact-details">
        <CgMail className='icon-customization'/>
        <div className="mail-details">
          <span>Send your mail</span>
          <span>abhi@gmail.com</span>
        </div>
      </div>
      <div className="contact-details"> 
        <BiPhoneCall className='icon-customization'/>
        <div className="mail-details">
          <span>Send your mail</span>
          <span>abhi@gmail.com</span>
        </div>
      </div>
      <div className="contact-details">
        <SlLocationPin className='icon-customization'/>
        <div className="mail-details">
          <span>Send your mail</span>
          <span>abhi@gmail.com</span>
        </div>
      </div>
      </div>
      </div>
<div>
  {/* <NavBar/> */}
</div>
    </div>
  )
}

export default Landing
