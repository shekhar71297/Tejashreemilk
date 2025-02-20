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
import NavBar from "../../common/NavBar/NavBar";
import Landing from "../landingPage/Landing";

function Contact() {
   useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
      });
    }, []);
  return (
    <div>
      <Landing/>
 
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
              <span >Indapur Road, Maharashtra</span>
            </div>
          </div>

          <div className="contactUs-details">
          <div className="contactUs-icon-name">
            <CgMail className="contactUs-icon" />
              <span className="icon-details">Email Support</span>
              </div>
            <div className="mail-info">
              <span>tejashreemilk3@gmail.com</span>
            </div>
          </div>

          <div className="contactUs-details">
          <div className="contactUs-icon-name">
            <BiPhoneCall className="contactUs-icon" />
              <span className="icon-details" data-aos="fade-in">Phone Number</span>
              </div>
            <div className="mail-info">
              <span>+918390057002</span>
            </div>
          </div> 

          
          </div>
          <hr />
          <p className="contactUs-left-des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi impedit vel alias fugit?</p>
        </div>
        <div className="right-form">
          <div className="right-container">
            <h1>Find Us On The Map</h1>
            <p>Find our location below</p>
            
            {/* Embed Google Map */}
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.448351698119!2d73.73510531426496!3d18.396157387489246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2d45791e7a953%3A0x2d4f8b70e3d624df!2sIndapur%20Road%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1676232218397!5m2!1sen!2sin"
                width="100%" 
                height="400" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </Container>
       <FooterPage/>
    </div>
  );
} 



export default Contact;
