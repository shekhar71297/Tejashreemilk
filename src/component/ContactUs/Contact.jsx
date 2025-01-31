import React from "react";
// import Landing from '../landingPage/Landing'
import Container from "react-bootstrap/Container";
import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import "./contact.css";

function Contact() {
  return (
    <div>
      {/* <Landing/> */}
      <div className="contact-bg">
        <img
          src="https://wallpapercrafter.com/desktop1/671361-liquid-motion-water-no-people-black-color-abstract.jpg"
          alt="contact-background"
        />
        <div className="deatailsOnBackgound">
          <span>Get In Touch</span>
          <span>Contact Us</span>
        </div>
      </div>
      {/* contactUs form */}
      <Container className="contact-container">
        <div className="left-form">
          <span>For more Information</span>
          <h1>Lets Talk</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, error!
          </p>
          <div className="contact-form">
          <div className="contactUs-details">
            <CgMail className="icon-customization" />
              <span>Send your mail</span>
            <div className="mail-info">
              <span>abhi@gmail.com</span>
            </div>
          </div>

          <div className="contactUs-details">
            <CgMail className="icon-customization" />
              <span>Send your mail</span>
            <div className="mail-info">
              <span>abhi@gmail.com</span>
            </div>
          </div> 

          <div className="contactUs-details">
            <CgMail className="icon-customization" />
              <span>Send your mail</span>
            <div className="mail-info">
              <span>abhi@gmail.com</span>
            </div>
          </div>
          </div>
          <hr />
          <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi impedit vel alias fugit?</h3>
        </div>
        <div className="right-form">

    <div class="container">
        <h1>Send Us A Message</h1>
        <p>Please fill out the form below and our expert team will get back to you shortly.</p>
        <form>
            <div class="form-group">
                <label for="first-name">First Name *</label>
                <input type="text" id="first-name" name="first-name" placeholder="First name here" required/>
            </div>
            <div class="form-group">
                <label for="last-name">Last Name *</label>
                <input type="text" id="last-name" name="last-name" placeholder="Last name here" required/>
            </div>
            <div class="form-group">
                <label for="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Add email" required/>
            </div>
            <div class="form-group">
                <label for="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help you?" required/>
            </div>
            <div class="form-group">
                <label for="comments">Comments / Questions *</label>
                <textarea id="comments" name="comments" placeholder="Comments" required></textarea>
            </div>
            <div class="form-group">
                <input type="submit" value="Send Message"/>
            </div>
        </form>
    </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
