import React, { useState } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollSevice'
import Animations from '../../utilities/Animation'
import './Resume.css'



const Resume = (props) => {
    const [selectBulletIndex,setSelectedBulletIndex] =useState(0);
    const [carousalOffSetStyle ,setCarousalOffSetStyle]=useState({});

    let fadeInScreenHandler =(screen)=>{
        if(screen.fadeScreen !== props.id){
          return
        }
        Animations.animations.fadeInScreen(props.id)
      }
    
      const fadeInSubscription  = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading =(props)=>{
        
        return (
        <div className='resume-heading'>
            <div className='resume-main-heading'>
       
                <li>  <span>{props.heading ? props.heading: ""}</span></li>

                    {props.fromDate && props.toDate ?(
                        <div className='heading-date'>
                            {props.fromDate + "_" +props.toDate}
                             </div>):<div></div>}

                             </div>

                <div className='resume-sub-heading'>
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>

                <div className='resume-heading-description'>
                    <span>{props.description ? props.description :""}</span>

                </div>
            
        </div>)
    }

    const resumeBullets=[
         {
            label:"Education",
            logoSrc:"education.svg"
         },
         {
            label:"Work History",
            logoSrc:"work-history.svg"
         },
         {
            label:"Programming Skills",
            logoSrc:"programming-skills.svg"
         },
         {
            label:"Projects",
            logoSrc:"projects.svg"
         },
         {
            label:"Intrests",
            logoSrc:"interests.svg"
         },
    ];

    const programingSkillsDetails =[
        {
            skill:"JavaScript",ratingPercantage:70
        },
        {
            skill:"React.js",ratingPercantage:60
        },
        {
            skill:"React Native",ratingPercantage:60
        },
        {
            skill:"Express.jS",ratingPercantage:60
        },
        {
            skill:"Mongo DB",ratingPercantage:60
        },
        {
            skill:"HTML",ratingPercantage:80
        },
        {
            skill:"CSS",ratingPercantage:70
        },
    ];


    const projectDetails=[
        {
            title:"Personal Portfolio Website",
            duration:{
                fromDate:"2023",
                toDate:"2023",
            },
            description:"A Personal Prortfolio website to showcase all my details and projects at one place.",
            subHeading:"Technologies Used: React Js, Bootstrap"
        },
        {
            title:"Game Flix",
            duration:{
                fromDate:"2023",
                toDate:"2023",
            },
            description:"A Website use to see latest Games Trailer.",
            subHeading:"Technologies Used: React Js, Next.JS, JWT,Hasura.io "
        },


    ];

    const resumeDeatils=[
        <div className='resume-screen-conatiner' key="education">
          <ResumeHeading 
            heading={"Savitribai Phule Pune University"}
            subHeading={"Bachelor of Science in Electronics"}
            fromDate={"2013"}
            toDate={"2016"}
            />
      <ResumeHeading 
            heading={"High School"}
            subHeading={"Maharashtra State Board of Secondary & Higher Secondary Education"}
            fromDate={"2011"}
            toDate={"2012"}
            />

        </div>,

        <div className='resume-screen-conatiner' key="work-experince">
            <ResumeHeading 
            heading={"Concentrix"}
            subHeading={"Sr. Claim Adjucator"}
            fromDate={"2018"}
            toDate={"2022"}
            />
            <div className='experience-description'>
            <li><span className='resume-description-text'> I was working as sr. Operation representative in the highmark process. It is a United States healthcare company. I was working on uniform billing and HCFA claims.</span></li>
             <li><span>Handle claims processing utilising Knowledge of medical coding standards including HCPCS and CPT code.</span></li>
            <br/>
          <li>  <span className='resume-description-text'> Prepared reports and dashboards by utilising Microsoft Excel application functions like IF, SUM, SUMIF , INDEX, MATCH, VLOOKUP, HLOOKUP, PIVIOT TABLE, PIVOT CHARTS, SLICER, TIMELINE, DATA VALIDATION, AVERAGE IF, AVERAGE.</span></li>
        </div>
        </div>,
        <div className='resume-screen-conatiner programing-skills-container' 
            key="programing-skills"
        >
            {programingSkillsDetails.map((skill,index)=>(
                <div className='skill-parent' key={index}>
                    <div className='heading-bullet'></div>
                   <span><li>{skill.skill}</li></span>
                    <div className='skill-percentage'>
                        <div style={{width:skill.ratingPercantage + "%"}} className='active-percentage-bar'>

                        </div>
                    </div>
                </div>
            ))}

        </div>,
        <div className='resume-screen-conatiner' key="projects">
                {projectDetails.map((projectDetails,index)=>(
                    <ResumeHeading
                    key={index}
                    heading={projectDetails.title}
                    subHeading={projectDetails.subHeading}
                    description={projectDetails.description}
                    fromDate={projectDetails.duration.fromDate}
                    toDate={projectDetails.duration.toDate}
                    />

                ))}
        </div>,
        <div className='resume-screen-conatiner' key="interests">
                    <ResumeHeading
                        heading='Readig'
                        description='reading , which involves engaging with various forms of literature, such as books, articles, essays, or other written content. It allows you to explore different topics.'
                    />
                      <ResumeHeading
                        heading='Gaming'
                        description='gaming , which involves playing video games on various platforms, such as computers, consoles, or mobile devices. Gaming offers a wide range of experiences, from immersive storytelling and exploration to competitive challenges and social interactions.'
                    />
                      <ResumeHeading
                        heading='Travel'
                        description='traveling , which involves exploring new destinations and experiencing different cultures, landscapes, and lifestyles. Traveling allows you to broaden your horizons, create lasting memories, and gain a deeper understanding of the world around you.'
                    />

        </div>


    
    ];


const handleCarousal =(index)=>{ 
    let offsetHeight =360;
    let newCarousalOffset ={
        style:{transform:"translateY("+index * offsetHeight * -1+ "px)"}
    };
    setCarousalOffSetStyle(newCarousalOffset)
    setSelectedBulletIndex(index);
}


const getBullets =()=>{

    return (resumeBullets.map((bullet,index)=>(
      
        <div 
        onClick={()=>handleCarousal(index)}
        className={index === selectBulletIndex ? "bullet selected-bullet":"bullet"}
        key={index}
        > 

            <img className='bullet-log'  
                src={require (`../../asstes/Resume/${bullet.logoSrc}`)}
            alt="opps,,,NO internet Connection"/>
            
            <span className='bullet-label'>
            {bullet.label}
            </span>
            
        </div>
    )))
}





const getResumeScreen=()=>{
    
    return(
        <div 
        style={carousalOffSetStyle.style}
        className='resume-details-carousal'
        >
            {resumeDeatils.map((ResumeDetail)=>ResumeDetail)}

        </div>
    )
}




  return (
    <div className='resume-container screen-container' id={props.id || ""}>
        <div className='resume-content'>
            <div className='resume-title'>
            <ScreenHeading title={'Resume'} subHeading={'My Formal Bio Details'}/>
            </div>
            <div className='resume-card'>
                <div className='resume-bullets'>
                    <div className='bullet-container'>
                        <div className='bullet-icons'>

                        </div>
                        <div className='bullets'>{getBullets()}</div>

                    </div>

                </div>
                <div className='resume-bullet-details'>
                    {getResumeScreen()}
                </div>
            </div>

        </div>

    </div>
  )
}

export default Resume