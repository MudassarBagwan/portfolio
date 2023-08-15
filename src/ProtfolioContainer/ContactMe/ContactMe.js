import React,{useState} from 'react'
import imgBack from "../../images/mailz.jpeg"
import load1 from "../../images/load2.gif"
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollSevice'
import Animations from '../../utilities/Animation'
import Typical from 'react-typical'
import './ContactMe.css'


const ContactMe = (props) => {
    let fadeInScreenHandler =(screen)=>{
        if(screen.fadeScreen !== props.id){
          return
        }
        Animations.animations.fadeInScreen(props.id)
      }
    
      const fadeInSubscription  = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

      const [name,setName]=useState("")
      const [email,setEmail]=useState("")
      const [message,setMessage]=useState("")
      const [banner,setBanner]=useState("")
      const [isLoading,setIsLoading]=useState(false)


      const handleName =(e)=>{
        setName(e.target.value)

      }

      const handleEmail =(e)=>{
        setEmail(e.target.value)
        
      }
      const handleMessage =(e)=>{
        setMessage(e.target.value)
        
      }


  return (
    <div>
        <div className='main-container' id={props.id || ''}>
         <div className='contact-me-name'>
        <ScreenHeading
        subHeading={"Lets KeepIn Touch"}
        title={'Contact Me'}
        /></div>   

        <div className='central-form'>

            <div className='col'>
            <h2 className='title'>
                            {""}
                            <Typical 
                            loop={Infinity}
                            steps={[
                                "Get In Touch 📧",
                                2000,]}
                            
                            />
             </h2>
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

            <div className='back-form'>
                <div className='img-back'>
                    <h4>Send Your Message Here!</h4>
                    <img src={imgBack} alt='not found'/>
                </div>
                   <form action="https://formspree.io/f/xwkdvdeb" method="Post">
                    <p>{banner}</p>
                    <label htmlFor='name'>Name</label>
                    <input type="text"  
                    name="username"
                    onChange={handleName}
                    value={name}
                    required/>

                    <label htmlFor='email'>Email</label>
                    <input type="email" 
                    name="Email"
                    onChange={handleEmail}
                    value={email}
                     required/>

                    <label htmlFor='message'>Messgae</label>
                    <textarea type="text"
                     onChange={handleMessage}
                    value={message}
                    name="message"
                     required/>
                    <div className='send-btn'>
                        <button type='submit'> 
                            Send <i className='fa fa-paper-plane' />
                        </button>

                    </div>

                    </form>                 
            </div>

        </div>


        </div>


    </div>
  )
}

export default ContactMe