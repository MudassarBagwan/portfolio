import React from 'react'
import Typical from 'react-typical'
import './Profile.css'

const Profile = () => {
  return (
    <div className='profile-conatiner'>
        <div className="profile-parent">
            <div className="profile-detail">

                     <div className="cloz">
                    <div className="cloz-icon">
                    <a href='#/'>
                       <i className='fa fa-facebook-square'></i>
                    </a>
                    <a href='#/'>
                       <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='#/'>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href='#/'>
                       <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='#/ '>
                       <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                    </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                        {""}
                    </span>
                    Hi, I am <span className='highlighted-text'>
                        Mudassar Bagwan
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        {""}
                        <h1>
                            {""}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Ethusiastic Devloper 🔴",
                                2000,
                                "Full Stack Devloper 💻",
                                2000,
                                "MERN Stack Devloper 😎",
                                2000,
                                "React Navtive Devloper 📱",
                                2000,
                                "Cross Platform Devloper 🌎",
                                2000,

                            ]}
                            />
                        </h1>
                        <span className="profile-role-tagline">
                        Knack of building applications with front and back end operations.
                        </span>
                    </span>
                </div>
                <div className="profile-options">
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
            <div className="profile-picture">
            <div className="profile-picture-background">

                </div>
            </div>
        </div>

    </div>
  )
}

export default Profile;