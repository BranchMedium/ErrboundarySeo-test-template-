import React from "react";
import footerstyle from "./footer.module.css";
// import theLinkingStyle from "./thelinking.module.css";
//************************************************* */
let footbc = {
    backgroundColor: 'aqua',
    width: '10%',
    height: '10%'
}
//*************************************************************************************
const TheSocial = () => {
    return (
        <div>
            <div className={footerstyle.footersocial}>
                <address id= {footerstyle.socialflex}>
                    <div style= {footbc}><span  id= {footerstyle.tempo1} className= {footerstyle.tempo}><img alt= 'face' src= {''}> </img></span></div>
                    <div style= {footbc}><span id= {footerstyle.tempo2} className= {footerstyle.tempo}><img alt= 'face' src= {''}> </img></span></div>
                    <div style= {footbc}><span id= {footerstyle.tempo3} className= {footerstyle.tempo}><img alt= 'face' src= {''}> </img></span></div>
                </address>
            </div>
        </div>
    )
}

export default TheSocial;