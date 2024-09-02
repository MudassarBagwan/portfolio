import Home from "../ProtfolioContainer/Home/Home";
import AboutMe from "../ProtfolioContainer/AboutMe/AboutMe";
import Resume from "../ProtfolioContainer/Resume/Resume";
import ContactMe from "../ProtfolioContainer/ContactMe/ContactMe";


export const TOTAL_SCREENS = [
    {
        screen_name:"Home",
        component:Home,

    },
    {
        screen_name:"Aboutme",
        component:AboutMe,

    },
    {
        screen_name:"Resume",
        component:Resume,

    },
    {
        screen_name:"Contact me",
        component:ContactMe,

    },
    
]



export const GET_SCREEN_INDEX = (screen_name)=>{
    if(!screen_name) return -1;

    for (let i=0; i < TOTAL_SCREENS.length ;i++){
        // eslint-disable-next-line
        if(TOTAL_SCREENS[i].screen_name=screen_name) return i;


    }
    return -1;
    
}
