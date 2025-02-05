import {useEffect} from "react";
// import Landing from '../landingPage/Landing'
import Container from "react-bootstrap/Container";
import { CgMail } from "react-icons/cg";
import { BiPhoneCall } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import "./contact.css";
import FooterPage from '../../common/footer/FooterPage'
import PageTitle from '../../common/pageTitle/PageTitle'
 
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);
  return (
    <div>
      {/* <Landing/> */}
    <PageTitle title={"Contact Us"} description={"Get In Touch"}/>
      {/* contactUs form */}
      <Container className="contact-container  ">
        <div className="left-form">
          <span>For more Information</span>
          <h1  >Hey, Lets Talk</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, error!
          </p>
          <div className="contact-form">

          <div className="contactUs-details">
            <div className="contactUs-icon-name">
            <SlLocationPin className="contactUs-icon" />
              <span className="icon-details">Our Location</span>
              </div>
            <div className="mail-info">
              <span >abhi@gmail.com</span>
            </div>
          </div>

          <div className="contactUs-details">
          <div className="contactUs-icon-name">
            <CgMail className="contactUs-icon" />
              <span className="icon-details">Email Support</span>
              </div>
            <div className="mail-info">
              <span>abhi@gmail.com</span>
            </div>
          </div>

          <div className="contactUs-details">
          <div className="contactUs-icon-name">
            <BiPhoneCall className="contactUs-icon" />
              <span className="icon-details" data-aos="fade-in">Phone Number</span>
              </div>
            <div className="mail-info">
              <span>abhi@gmail.com</span>
            </div>
          </div> 

          
          </div>
          <hr />
          <p className="contactUs-left-des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi impedit vel alias fugit?</p>
        </div>
        <div className="right-form">

        <div className="right-container">
        <h1>Send Us A Message</h1>
        <p>Please fill out the form below and our expert team will get back to you shortly.</p>
        <form>
            <div className="form-group half">
                <label htmlFor="first-name">First Name *</label>
                <input type="text" id="first-name" required placeholder="First name here"/>
            </div>
            <div className="form-group half">
                <label htmlFor="last-name">Last Name *</label>
                <input type="text" id="last-name" required placeholder="Second name here"/>
            </div>
            <div className="form-group half">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" required placeholder="Add email"/>
            </div>
            <div className="form-group half">
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" required placeholder="How can we help you?"/>
            </div>
            <div className="form-group">
                <label htmlFor="comments">Comments / Questions *</label>
                <textarea id="comments" rows="5" required placeholder="Comments"></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>
    
        </div>
      </Container>
       <FooterPage/>
    </div>
  );
} 



export default Contact;
