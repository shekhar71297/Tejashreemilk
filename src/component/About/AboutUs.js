import React, { useContext } from "react";
import PageTitle from "../../common/pageTitle/PageTitle";
import { Container } from "react-bootstrap";
import FooterPage from "../../common/footer/FooterPage";
import "./aboutUs.css";
import { FaQuoteRight } from "react-icons/fa";
import { ImCheckboxChecked } from "react-icons/im";
import { WebContext } from '../../App';

function AboutUs() {
  const data = useContext(WebContext);

  if (!data || !data.aboutUs || !data.aboutUs['aboutUs-section']) {
    return <div>Loading...</div>; // Handle the case when data is not available
  }
  const aboutUsData = data.aboutUs['aboutUs-section'];

  const { galleryOne, galleryTwo } = data.aboutUs.gallery;

  const whyChooseData  = data.aboutUs.whyChooseMain;

  // Ensure galleryOne and galleryTwo are defined
  if (!galleryOne || !galleryTwo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
           <PageTitle title={"About Us"} description={"History of Our Farm"} />
      <Container className={aboutUsData.className}>
        <div className={aboutUsData.left.className}>
          <div className={aboutUsData.left.imgContainer.className}>
            <img
              src={aboutUsData.left.imgContainer.img.src}
              alt={aboutUsData.left.imgContainer.img.alt}
            />
          </div>
          <div className={aboutUsData.left.detail.className}>
            {aboutUsData.left.detail.text} <span>{aboutUsData.left.detail.span}</span>
          </div>
        </div>
        <div className={aboutUsData.detailSection.className}>
          <span className={aboutUsData.detailSection.italicName.className}>
            {aboutUsData.detailSection.italicName.text}
          </span>
          <h1>{aboutUsData.detailSection.heading.text}</h1>
          <p>{aboutUsData.detailSection.paragraph.text}</p>
          <div className={aboutUsData.detailSection.quote.className}>
            <FaQuoteRight className="quote-style" />
            <p>{aboutUsData.detailSection.quote.text}</p>
          </div>
          <div className={aboutUsData.detailSection.signature.className}>
            <img
              src={aboutUsData.detailSection.signature.img.src}
              alt={aboutUsData.detailSection.signature.img.alt}
            />
            <span>{aboutUsData.detailSection.signature.name}</span>
            <p>{aboutUsData.detailSection.signature.title}</p>
          </div>
        </div>
      </Container>
      {/* why to choose us section */}
      <div className={whyChooseData.className}>
        <div className={whyChooseData.whyChoose.className}>
          <span className={whyChooseData.whyChoose.italicName.className}>{whyChooseData.whyChoose.italicName.text}</span>
          <h1>{whyChooseData.whyChoose.heading.text}</h1>
          <p>
          {whyChooseData.whyChoose.paragraph.text}
          </p>

          <div className="why-choose-checkbox">
          {whyChooseData.whyChoose.checkboxes.map((item) => (
            <div className={item.className} key={item.id}>
           
           <ImCheckboxChecked className="checkbox-icon" />
              <div className="checkbox-detail">
                <span>{item.detail.span}</span>
                <p>{item.detail.paragraph}</p>
              </div>
            </div>
              ))}
            
          </div>
        </div>

        <div className={whyChooseData.whyChooseImg.className}>
          <img
            src={whyChooseData.whyChooseImg.img.src}
            alt={whyChooseData.whyChooseImg.img.alt}
          />
        </div>
      </div>

      {/* Gallery section */}
      <div className="gallery-name-title mt-5">
          <span >Our Gallery</span>
          <h2>Gallery Farm
          </h2>
        </div>

        <Container className="gallery-section mb-5">
      <div className="gallery-one">
        <div className={galleryOne.leftMain.className}>
          <img
            src={galleryOne.leftMain.img.src}
            alt={galleryOne.leftMain.img.alt}
          />
        </div>
        <div className="left-sub">
          {galleryOne.leftSub.map((subItem) => (
            <div className={subItem.className} key={subItem.id}>
              <img src={subItem.img.src} alt={subItem.img.alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-two">
        <div className="right-sub">
          {galleryTwo.rightSub.map((subItem) => (
            <div className={subItem.className} key={subItem.id}>
              <img src={subItem.img.src} alt={subItem.img.alt} />
            </div>
          ))}
        </div>
        <div className={galleryTwo.rightMain.className}>
          <img
            src={galleryTwo.rightMain.img.src}
            alt={galleryTwo.rightMain.img.alt}
          />
        </div>
      </div>
    </Container>
      <FooterPage />
    </div>
  );
}

export default AboutUs;
