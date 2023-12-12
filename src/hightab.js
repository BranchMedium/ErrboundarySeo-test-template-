import React from "react";
// import myStyleHome from "./webstylehome.module.css";
import TheSocial from "./footer";
import Layout from "./layout";
import Hightab from "./hightab.module.css";

import face from "./face.png";
import insta from "./insta.png";
import twi from "./twi.png";



let FooterStyle = {
    backgroundColor: 'aqua'
}
const HighTabcontent = () => {
    return (
        <div id= {Hightab.grid}>
                <div className= {Hightab.aqua}></div>
                <div className= {Hightab.red}></div>
                <div className= {Hightab.pink}></div>
                <div className= {Hightab.blue}>
                </div>
            </div>
    )
}
const HighTab = () => {
    return(
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <HighTabcontent/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export {HighTab, HighTabcontent};