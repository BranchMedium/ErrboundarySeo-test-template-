import React from "react";
import myStyleHome from "./stylehome.module.css";
import TheSocial from "./footer";
import Layout from "./layout";
import PadsContent from "./padscontent";
import {HighTabcontent} from "./hightab";
import {NoteTabcontent} from "./notetab";
import {MinitabNotecontent} from "./minitabnote";
import {TileNotecontent} from "./tilenote";
import face from "./face.png";
import insta from "./insta.png";
import twi from "./twi.png";



let FooterStyle = {
    backgroundColor: 'aqua'
}
const Padding = () => {
    return (
        <div id= {myStyleHome.paddingBottom}></div>
    )
}
const Pads = () => {
    return(
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <MinitabNotecontent/>
            <Padding/>
            <NoteTabcontent/>
            <Padding/>
            <TileNotecontent/>
            <Padding/>
            <HighTabcontent/>
            <Padding/>
            <PadsContent/>
            <Padding/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export default Pads;