import React from "react";
// import myStyleHome from "./webstylehome.module.css";
// import TheSocial from "./footer";
import Layout from "./layout";
import PadsContent from "./padscontent";

// import face from "./face.png";
// import insta from "./insta.png";
// import twi from "./twi.png";



// let FooterStyle = {
//     backgroundColor: 'aqua'
// }
const Pads = () => {
    return(
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <PadsContent/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export default Pads;