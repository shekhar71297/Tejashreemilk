import {useEffect,useContext} from "react";
import { FaCheck } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { WebContext } from '../../App';
import './homeService.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container } from "react-bootstrap";

function HomeService() {
  const data = useContext(WebContext);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      once: true, // Ensures animation happens only once
      easing: "ease-out", // Smooth animation effect
    });
  }, []);

  if (!data || !data.farmService) {
    return <div>Loading...</div>; // Add a loading state or handle the error appropriately
  }

  const farmService = data.farmService;
  return (
    <div>
      <Container>
      <div className="farm-service">
      <div className="farm-image-left">
          <img
            src={farmService.farmImageLeft.src}
            alt={farmService.farmImageLeft.alt}
            data-aos={farmService.farmImageLeft.dataAos}
          />
        </div>
        <div className="farm-service-info">
          <div className="farm-service-content">
            <div className="farm-content-one">
            <span data-aos={farmService.farmServiceInfo.farmServiceContent.farmContentOne.span.dataAos}>
                {farmService.farmServiceInfo.farmServiceContent.farmContentOne.span.text}
              </span>
              <h1 data-aos={farmService.farmServiceInfo.farmServiceContent.farmContentOne.h1.dataAos}>
                {farmService.farmServiceInfo.farmServiceContent.farmContentOne.h1.text}
              </h1>
            </div>
            <ul className="farm-content-two">
            {farmService.farmServiceInfo.farmServiceContent.farmContentTwo.map((item, index) => (
                <li key={index}>
                  <FaCheck className="farm-check-icon" /> {item.text}
                </li>
              ))}
            </ul>

            <button className="farm-service-btn">
              {farmService.farmServiceInfo.farmServiceContent.button.text} <TiArrowRight className="farm-service-right-arrow" />
            </button>
          </div>
          <div className="farm-img-right">
            <img
             src={farmService.farmServiceInfo.farmImgRight.img.src}
              alt="farm-image"
              data-aos ="fade-left"
            ></img>
            <h1  data-aos ="fade-up">  {farmService.farmServiceInfo.farmImgRight.h1.text}</h1>
            <div className="farm-content-right-down" data-aos ="fade-up">
              <div className="farm-content-right-count">
                
                {farmService.farmServiceInfo.farmImgRight.farmContentRightDown.farmContentRightCount.map((countItem, index) => (
                    <div key={index} className="farm-content-right-count-style">
                      <span>{countItem.farmContentRightCountStyle.span}</span>
                      <p>{countItem.farmContentRightCountStyle.p}</p>
                    </div>
                  ))}
                 
              </div>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}

export default HomeService;
