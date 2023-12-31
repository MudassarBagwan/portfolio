import React from 'react'
import { TOTAL_SCREENS } from '../utilities/commonUtils'
import Footer from './Footer/Footer'

const mapAllScreen = ()=>{
    return(
        TOTAL_SCREENS.map((screen)=>(
            (screen.component)?<screen.component screenName={screen.screen_name} key={screen.screen_name}
            id={screen.screen_name} />:<div key={screen.screen_name}></div>
        ))
    )
}
const ProtfolioContainer = () => {
  return (
    <div className='portfolio-container'>
        {mapAllScreen()}
    <Footer/>
    </div>
  )
}

export default ProtfolioContainer