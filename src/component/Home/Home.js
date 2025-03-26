



import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../common/NavBar/NavBar';
import FooterPage from '../../common/footer/FooterPage';
import { GrAchievement } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";

import "./home.css";
import { Image } from "react-bootstrap";
import { WebContext } from "../../App";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
// import NavBar from '../../common/NavBar/NavBar'
import Landing from "../landingPage/Landing";
// import Contact from '../ContactUs/Contact'
// import AboutUs from '../About/AboutUs'
import HomeService from "../Service/HomeService";

import { Link, useNavigate } from 'react-router-dom';

import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const data = useContext(WebContext);
  const nav = useNavigate()
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [cardStyle, setCardStyle] = useState({});
  useEffect(() => {
    AOS.init({
      duration: 500, // Animation duration (1 second)
      once: true, // Ensures animation happens only once
      easing: "ease-out", // Smooth animation effect
    });
  }, []);
  useEffect(() => {
    const updateStyle = () => {
      if (window.innerWidth < 575) {
        setCardStyle({
          position: 'relative',
          right: '0px',
          width: '100%',
          height: 'auto',
          marginTop: '20px',
          padding: '40px',
          border: 'none',
          backgroundColor: '#F0FCFF',
          borderTopLeftRadius: '70px',
          borderBottomRightRadius: '70px',
        });

      }
      else if (screenWidth >= 920 && screenWidth <= 1024) {
        // For screens between 920px and 1024px
        setCardStyle({
          position: 'absolute',
          top: '30%',
          right: '-50%',
          width: '525px',
          height: '320px',
          padding: '40px',
          border: 'none',
          backgroundColor: '#F0FCFF',
          borderTopLeftRadius: '70px',
          borderBottomRightRadius: '70px',
        });
      } else {
        setCardStyle({
          position: 'absolute',
          top: '30%',
          right: '-30%',
          width: '500px',
          height: '350px',
          padding: '40px',
          border: 'none',
          backgroundColor: '#F0FCFF',
          borderTopLeftRadius: '70px',
          borderBottomRightRadius: '70px',
        });
      }
    };

    // Run on mount and on resize
    updateStyle();
    window.addEventListener('resize', updateStyle);

    return () => {
      window.removeEventListener('resize', updateStyle);
    };
  }, []);
  const navigateToAbout = () => {
    nav('/about-Us')
  }


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <Landing />
      {/* <NavBar /> */}



      {data?.home?.map((val, index) => (
        <div className="image-container">
          <Image src={val.logoImgurl} fluid />
          <div className="card-overlay"  >
            {/* If you want to show a card overlay on the image */}
            <Container className="mt-4" data-aos="fade-up" >
              {data?.homevideo?.map((val, index) => (
                <Card className="Card-body">
                  <Row className="g-0">
                    <Col md={6} className="d-flex align-items-center p-4">
                      <div>
                        <h3 className="subtitle">{val?.subtitle}</h3>
                        <h2 className="heading">{val?.heading}</h2>
                        <p className="content">{val?.content}</p>
                        <Link className='know-btn' > Know Us More <TiArrowRight className="farm-service-right-arrow" /> </Link>
                      </div>
                    </Col>
                    <Col md={6}>
                      <video
                        width="100%"
                        autoPlay
                        muted
                        loop
                        className="farmVideo"
                      >
                        <source src={val?.videoUrl} type="video/mp4" />
                      </video>
                    </Col>
                  </Row>
                </Card>
              ))}
            </Container>



          </div>
        </div>
      ))}

      <section className="cow-section"    >
        <Container data-aos="fade-up" >
          <div className="cow-content">
            {/* Image Section */}
            <div className="cow-image-box">
              {
                data?.ceo?.map((val) =>
                  <img
                    src={val?.logoImgurl}
                    alt="Cows in barn"
                    className="cow-image"
                  />
                )
              }
              {/* <div className="cow-overlay">
                <span className="cow-trusted-text">We Are Trusted Happy </span>
                <span className="cow-clients-text">6000+ Clients</span>
              </div> */}
            </div>

            {/* Content Section */}
            <div className="cow-text-box">
              <h3 className="cow-about-title">Our Founder</h3>
              <h2 className="cow-heading">Vijay Brahmadev Shende</h2>
              <p className="cow-description">
              Vijay Brahmadev Shende, a 4th-generation farmer, established Tejashree Milk with a vision to empower the farming community. His goal was to create a sustainable business model that would generate part-time income for local farmers while ensuring consumers receive the best quality milk. With deep roots in farming and a passion for delivering excellence, Vijay Shende leads the company with a commitment to tradition, innovation, and social responsibility.
              </p>

              <div className="cow-vision-mission">
                {/* Our Vision */}
                <div className="cow-vision">
                  <h4 className="cow-subtitle">Our Vision</h4>
                  <ul className="cow-list">
                    <li><span className='tick-color' >✔</span> Empower farmers.</li>
                    <li><span className='tick-color' >✔</span> Build sustainability.</li>
                    <li><span className='tick-color' >✔</span> Benefit farmers and consumers.</li>
                  </ul>
                </div>

                {/* Our Mission */}
                <div className="cow-mission">
                  <h4 className="cow-subtitle">Our Mission</h4>
                  <ul className="cow-list">
                    <li><span className='tick-color' >✔</span>Provide quality milk.</li>
                    <li><span className='tick-color' >✔</span>Support farmers’ income.</li>
                    <li><span className='tick-color' >✔</span>Promote tradition and innovation.</li>
                  </ul>
                </div>
              </div>

              {/* Button */}
              <button className="cow-btn">
                Know Us More →
              </button>
            </div>
          </div>
        </Container>
      </section>

      <div className='record-section'  data-aos="fade-up" >
        <Container className="mt-4">
          {/* Card Container */}
          <Card className="record-card">
            <Card.Body className="achive-body">
              {/* Grid: One Row, Three Columns */}
              <Row>
                {/* Column 1 */}
                <Col md={4} className="p-3">
                  <div className="column-content">
                    <div className="achiv-icons">
                      <GrCertificate />
                    </div>

                    <div className="achiv-content">
                      <h5 className="achiev-title">
                        20 Years Of Experience
                      </h5>
                      <p className="achiev-subtitle">
                        All About Dairy And Cow Farm{" "}
                      </p>
                    </div>
                  </div>
                </Col>

                {/* Column 2 */}
                <Col md={4} className="p-3">
                  <div className="column-content">
                    <div className="achiv-icons">
                      <GrAchievement />
                    </div>

                    <div className="achiv-content">
                      <h5 className="achiev-title">
                        20 Years Of Experience
                      </h5>
                      <p>All About Dairy And Cow Farm </p>
                    </div>
                  </div>
                </Col>
                {/* Column 3 */}
                <Col md={4} className="p-3">
                  <div className="column-content">
                    <div className="achiv-icons">
                      <GrUserWorker />
                    </div>

                    <div className="achiv-content">
                      <h5 className="achiev-title">
                        20 Years Of Experience
                      </h5>
                      <p>All About Dairy And Cow Farm </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>


{/* <HomeService/> */}

      <div className='about-section'  data-aos="fade-up">
        <Container>
          <Row className="d-flex align-items-center">
            <Col md={8} className="position-relative">
              {data?.about?.map((val, index) => (
                <div key={index}>
                  <img
                    src={val?.imgUrl}
                    alt="Example"
                    className="img-fluid"
                  />
                  {/* Right Card (conditionally styled) */}
                  <Card style={cardStyle}>
                    <Card.Body>
                      <Card.Title className='subtitle'>{val?.subheading}</Card.Title>
                      <Card.Text className='about-heading'>{val?.heading}</Card.Text>
                      <Card.Text className='about-content'>{val?.content}</Card.Text>
                      <button className="farm-service-btn">
                        Read more <TiArrowRight className="farm-service-right-arrow" />
                      </button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>

      <div className="product-section" data-aos="fade-up">
        <Container>
          <div className="product-heading">
            <h5 className="product-subheading">Our All Products</h5>
            <h1 className="product-heading">View All Products</h1>
          </div>

          <Row>
            {/* Loop through the products */}
            {data?.product?.map((val, index) => (
              <Col md={3} key={index} className="mb-3">
                <Card
                  style={{
                    width: "100%",
                    backgroundColor: index % 2 === 0 ? "#248eb7" : "white", // Apply blue for odd cards
                    color: index % 2 === 0 ? "white" : "#248eb7", // Change text color for odd cards
                  }}
                  className="product-card"
                >
                  <Card.Img
                    variant="top"
                    className="product-img"
                    src={val.imgUrl}
                  />
                  <Card.Body>
                    <Card.Title className='product-name' >{val?.heading}</Card.Title>
                    <Card.Text className='product-detail' >{val?.content}</Card.Text>
                    <div className='price-div'  >

                      <span className='product-price' style={{
                        color: index % 2 === 0 ? '#F8AB13' : '#103371', // Change text color for odd cards
                      }}  ><span><FaRupeeSign className='price-logo' /></span>{val?.price}</span>

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {/* 
      <div className='service-section' >
        <HomeService />
      </div> */}

      <Container className="farm-section" data-aos="fade-up">
        <Row className="align-items-center">
          {/* Left Section */}
          <Col md={5} className="text-section">
            <p className="sub-heading">Our Program</p>
            <h2 className="main-heading">Our Farm Programs</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu lectus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
            <button className="farm-service-btn">
              Read more <TiArrowRight className="farm-service-right-arrow" />
            </button>
          </Col>

          {/* Right Section - Cards */}
          <Col md={7}>
            <Row>
              {data?.programs?.map((program, index) => (
                <Col key={index} md={4} sm={6} xs={12} className="mb-3">
                  <Card className="program-card text-center">
                    <div>
                      <img  className="icon" src={program?.icon} alt={program?.title} />
                    </div>
                    <Card.Body>
                      <Card.Title className='program-title' >{program.title}</Card.Title>
                      <Card.Text className='program-content' >{program.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>

      <div className="footer-section">
        <FooterPage />
      </div>
    </div>
  );
}

export default Home;
