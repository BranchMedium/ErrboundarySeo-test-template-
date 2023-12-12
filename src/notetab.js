import React from "react";
// import myStyleHome from "./webstylehome.module.css";
import TheSocial from "./footer";
import Layout from "./layout";
import Notetab from "./notetab.module.css";

import face from "./face.png";
import insta from "./insta.png";
import twi from "./twi.png";


const Subtitle = () => {
    return (
        <>
            <div className= {Notetab.subtitletab}>
            </div>
        </>
    )
}
//*********************************************/
const SubtitleTab = () => {
    return (
    
        <div id= {Notetab.flexsubtitletab}>
            <Subtitle/>
        </div>
    
    )
}
//************************************************************************************************************************************************** */

const DescriptiveSubtitle = () => {
    return (
        <div className= {Notetab.describesubtitletabFlex}>
            <div id= {Notetab.description}></div>
            <div id= {Notetab.title}></div>
        </div>
    )
}

//*****************************************/
const DescriptiveSubtitleTab = () => {
    return (
        <div id= {Notetab.flexdescribesubtitletab}>
            <DescriptiveSubtitle/>
        </div>
    )
}
//******************************************************************************************************************************************************* */
const PicTab = (props) => {
    return (
    
            <div id= {Notetab.flexpictab}>
                <div className= {Notetab.picturepictab}>
                </div>
                {/* <SubtitleTab/> */}
                {props.children}
            
            </div>
    )
}
//************************************************************************************************************************************************************* */


let FooterStyle = {
    backgroundColor: 'aqua'
}
const NoteTabcontent = () => {
    return (
        <div id= {Notetab.gridnotetab}>
                <div className= {Notetab.flexnotetab}>
                    <PicTab><DescriptiveSubtitleTab/></PicTab>
                    <PicTab><SubtitleTab/></PicTab>
                    <PicTab><DescriptiveSubtitleTab/></PicTab>
                    <PicTab><SubtitleTab/></PicTab>
                    <Subtitle/>
                    <DescriptiveSubtitle/>
                    <Subtitle/>
                    <DescriptiveSubtitle/>
                    <DescriptiveSubtitle/>
                </div>
            </div>
    )
}
const NoteTab = () => {
    return (
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <NoteTabcontent/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export {NoteTab, NoteTabcontent};