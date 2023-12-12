import React from "react";
import footerstyle from "./footer.module.css";
// import theLinkingStyle from "./thelinking.module.css";
//************************************************* */

//*************************************************************************************
const TheSocial = (props) => {
    return (
        <div style={{display: props.socialOnOff}}>
            <div style= {props.myTwoStyle} className={footerstyle.footersocial}>
            <address id= {footerstyle.socialflex}>
                
                <div><span  id= {footerstyle.tempo1} className= {footerstyle.tempo}><img alt= 'face' src= {props.mySocial[0]}> </img></span></div>
                <div><span id= {footerstyle.tempo2} className= {footerstyle.tempo}><img alt= 'face' src= {props.mySocial[1]}> </img></span></div>
                <div><span id= {footerstyle.tempo3} className= {footerstyle.tempo}><img alt= 'face' src= {props.mySocial[2]}> </img></span></div>
            </address>
            </div>
        </div>
    )
}

export default TheSocial;