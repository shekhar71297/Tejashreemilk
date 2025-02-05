



import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../../common/NavBar/NavBar';
import FooterPage from '../../common/footer/FooterPage';
import { GrAchievement } from "react-icons/gr";
import { GrCertificate } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";
import { FaRupeeSign } from "react-icons/fa";
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
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
 

  const [cardStyle, setCardStyle] = useState({});

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
      <NavBar />
      <HomeService/>
      
      {/* <AboutUs data-aos="fade-in"/> */}
      {/* <Contact/> */}
      {/* <NavBar/> */}
      {/* <AboutUs/> */}
      {/* <Contact/> */}

      {/* <AboutUs/> */}


      {data?.home?.map((val, index) => (
        <div className="image-container">
          <Image src={val.logoImgurl} fluid />
          <div className="card-overlay">
            {/* If you want to show a card overlay on the image */}
            <Container className="mt-4">
              {data?.homevideo?.map((val, index) => (
                <Card className="Card-body">
                  <Row className="g-0">
                    <Col md={6} className="d-flex align-items-center p-4">
                      <div>
                        <h3 className="subtitle">{val?.subtitle}</h3>
                        <h2 className="heading">{val?.heading}</h2>
                        <p className="content">{val?.content}</p>
                        <Link> Know More</Link>
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
        </div>
      ))}


      <div className="product-section">
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
                    backgroundColor: index % 2 === 0 ? "#103371" : "white", // Apply blue for odd cards
                    color: index % 2 === 0 ? "white" : "#103371", // Change text color for odd cards
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

   
        <div className='about-section'>
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
                  <Button className='about-btn' onClick={navigateToAbout}>
                    Know More
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
        </div>
    
      
      <div className='gallery-section' >
        <div className="gallery-name-title mt-5">
          <span >Our Gallery</span>
          <h2>Gallery Farm
          </h2>
        </div>
        <Container className="gallery-section mb-5 ">

          <div className="gallery-one">
            <div className="left-main eihe-box eihe-shutter-in">

              <img
                src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/cows-on-a-diary-farm-agriculture-industry-resize.jpg"
                alt="whyChooseim"
              />

            </div>
            <div className="left-sub">
              <div className="eihe-box eihe-shutter-in">
                <img src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt="" />
              </div>
              <div className="eihe-box eihe-shutter-in">
                <img src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-two">
            <div className="right-sub ">
              <div className="eihe-box eihe-shutter-in">
                <img src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt="" />
              </div>
              <div className="eihe-box eihe-shutter-in">
                <img src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt="" />
              </div>
            </div>
            <div className="right-main  eihe-box eihe-shutter-in">
              <img
                src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/cows-on-a-diary-farm-agriculture-industry-resize.jpg"
                alt="whyChooseim"
              />
            </div>
          </div>
        </Container>
      </div>

      <div className="footer-section">
        <FooterPage />
      </div>
    </div>
  );
}

export default Home;
