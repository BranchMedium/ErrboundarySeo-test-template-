import React from "react";
// import myStyleHome from "./webstylehome.module.css";
// import TheSocial from "./footer";
import Layout from "./layout";
import tileNote from "./tilenote.module.css";

// import face from "./face.png";
// import insta from "./insta.png";
// import twi from "./twi.png";



// let FooterStyle = {
//     backgroundColor: 'aqua'
// }
const TileNotecontent = () => {
    return (
        <div id= {tileNote.gridtilenote}>
                <div className= {tileNote.flextilenote}>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                    <div className= {tileNote.tiles}>
                        <div className= {tileNote.tiletext}></div>
                        <div className= {tileNote.tileimage}></div>
                    </div>
                </div>
            </div>
    )
}
const TileNote = () => {
    return (
        <>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
            <Layout/>
            <TileNotecontent/>
                {/* <TheSocial socialOnOff= 'block' mySocial= {[face, insta, twi]} myTwoStyle= {FooterStyle}/> */}
        </>
    )
}

export {TileNote, TileNotecontent};