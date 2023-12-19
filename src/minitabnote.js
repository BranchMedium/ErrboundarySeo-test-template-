import React from "react";
// import myStyleHome from "./webstylehome.module.css";
// import TheSocial from "./footer";
import Layout from "./layout";
import minitabNote from "./minitabnote.module.css";

// import face from "./face.png";
// import insta from "./insta.png";
// import twi from "./twi.png";



// let FooterStyle = {
//     backgroundColor: 'aqua'
// }
const MinitabNotecontent = () => {
    return (
        <div id= {minitabNote.gridmininote}>
                <div className= {minitabNote.flexmininote}>
                    <div id= {minitabNote.note}></div>
                    <div id= {minitabNote.image}></div>
                </div>
            </div>
    )
}
const MinitabNote = () => {
    return (
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <MinitabNotecontent/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export {MinitabNote, MinitabNotecontent};