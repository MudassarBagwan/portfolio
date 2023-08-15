import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from "../../utilities/ScrollSevice"
import Animations from "../../utilities/Animation"
import "./AboutMe.css"

const AboutMe = (props) => {
  let fadeInScreenHandler =(screen)=>{
    if(screen.fadeScreen !== props.id){
      return
    }
    Animations.animations.fadeInScreen(props.id)
  }

  const fadeInSubscription  = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  const SCREEN_CONSTANTCE ={
    description:"Full Stack web and mobile devloper with background knowledge of MERN stacks with redux, along with a kanck of building applications with utmost efficeincy. Strong Professional With BSC willing to be an assets for an Organization.",
    highlights:{
      bullets:[
        "Full Stack web and mobile devlopment",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for State Management",
        "Building REST API",
        "Managing database",

      ],
      heading:"Here are a Few Highlights:",

    }
  }

  const renderHighlight =() =>{
    return(
      SCREEN_CONSTANTCE.highlights.bullets.map((value,i) => (
        <div className='highlight' key={i}> 
          
    
          <li> <span>{value}</span></li>
        

        </div>
      ))
    )
  }



  return (
    <div className='about-me-container screen-container' id={props.id || ""}>
      <div className="about-me-parent">
      <div className="about-me-name">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'}/>
        </div>
        <div className='about-me-card'>
          <div className='about-me-profile'></div>
          <div className='about-me-details'>
            <span className='about-me-description'>{SCREEN_CONSTANTCE.description}</span>
            <div className='about-me-highlights'>
              <div className='highlight-heading'>
                <span>{SCREEN_CONSTANTCE.highlights.heading}</span>
              </div>

              {renderHighlight()}

            </div>

            <div className='about-me-options'>

            <button className="btn primary-btn">
                        {""}
                        Hire Me
                    </button>
                    <a href="CV_Mudassar.pdf" download='CV_Mudassar.pdf'>
                        <button className='btn highlighted-btn'>
                            Get Resume
                        </button>
                            
                    </a>

            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default AboutMe
