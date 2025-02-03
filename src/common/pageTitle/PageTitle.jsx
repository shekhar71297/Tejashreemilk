import React from 'react'
import './pageTitle.css'
function PageTitle({title,description}) {
  return (
    <div>
        <div className="contact-bg">
        <img
          src="https://wallpapercrafter.com/desktop1/671361-liquid-motion-water-no-people-black-color-abstract.jpg"
          alt="contact-background"
        />
        <div className="deatailsOnBackgound">
          <span className='italic-name'>{description}</span>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
