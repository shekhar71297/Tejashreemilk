import React from "react";
import PageTitle from "../../common/pageTitle/PageTitle";
import { Container } from "react-bootstrap";
import FooterPage from "../../common/footer/FooterPage";
import "./aboutUs.css";
import { FaQuoteRight } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";

function AboutUs() {
  return (
    <div>
      <PageTitle title={"About Us"} description={"History of Our Farm"} />
      <Container className="aboutUs-container my-5 ">
        <div className="aboutUs-left">
          <div className="aboutUs-img">
            <img
              src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/elementor/thumbs/a-group-of-young-dairy-cows-outdoor-walking-in-a-f-resize-qb2pqvi2a1jcltssj6juunks8520hepbr1pd1hmf7g.jpg"
              alt="cow farm"
            />
          </div>
          <div className="cow-farm-detail">
            We Are Trusted Happy <span>6000+</span> Client
          </div>
        </div>
        <div className="aboutUs-detail">
          <span className="italic-name">About Us</span>
          <h1>Tracing the Journey of Milk from Our Contented Cows</h1>
          <p>
            Curabitur faucibus orci a condimentum pretium. Pellentesque vel
            libero feugiat nibh cursus consequat vel eu lectus. Praesent eget
            ipsum blandit, tempus purus sed, vestibulum tellus. Nam laoreet
            massa semper est gravida tristique.
          </p>
          <div className="aboutUs-quote">
            <FaQuoteRight className="quote-style" />
            <p>
              Curabitur id sem sit amet nibh vulputate tincidunt in vitae erat.
              Morbi vehicula, purus quis lacinia vehicula, nunc nunc rutrum est,
              sit amet porta odio mi vulputate turpis. Proin at ex pharetra.
            </p>
          </div>
          <div className="signature-div">
            <img
              src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/signature.png"
              alt="signature-img"
            ></img>

            <span>Name of Owner</span>
            <p>Founder of Tejashree Milk</p>
          </div>
        </div>
      </Container>
      {/* why to choose us section */}
      <div className="why-choose-main">
        <div className="why-choose">
          <span className="italic-name">Why Choose Us</span>
          <h1>Unleash the Magic of Farm Crafted Dairy</h1>
          <p>
            Curabitur faucibus orci a condimentum pretium. Pellentesque vel
            libero feugiat nibh cursus consequat vel eu lectus.
          </p>

          <div className="why-choose-checkbox">
            <div className="checkbox">
              <ImCheckboxChecked className="checkbox-icon" />
              <div className="checkbox-detail">
                <span>100% Naturally</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="checkbox">
              <ImCheckboxChecked className="checkbox-icon" />
              <div className="checkbox-detail">
                <span>100% Naturally</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="checkbox">
              <ImCheckboxChecked className="checkbox-icon" />
              <div className="checkbox-detail">
                <span>100% Naturally</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-img">
          <img
            src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/cows-on-a-diary-farm-agriculture-industry-resize.jpg"
            alt="whyChooseim"
          />
        </div>
      </div>

      {/* Gallery section */}
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
            <img   src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt=""/>
            </div>
            <div className="eihe-box eihe-shutter-in">
            <img   src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt=""/>
            </div>
          </div>
        </div>
        <div className="gallery-two">
          <div className="right-sub ">
          <div className="eihe-box eihe-shutter-in">
            <img   src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt=""/>
            </div>
            <div className="eihe-box eihe-shutter-in">
            <img   src="https://templatekit.kulokale.com/moolydairy/wp-content/uploads/sites/13/2023/08/one-of-milk-cows-in-cowshed-touching-hand-of-male-resize.jpg" alt=""/>
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
      <FooterPage />
    </div>
  );
}

export default AboutUs;
