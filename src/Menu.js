import React from "react";
// import { myDisplay } from "./Thetopheader";
import topheaderstyle from "./Thetopheader.module.css";
import menuStyle from './menu.module.css';
import {Link} from "react-router-dom";

//************************************************<a href=”javascript:googlefc.callbackQueue.push(googlefc.showRevocationMessage)”>R-ads</a>*********** */

// function RADS() {
//     let adsHttp = new XMLHttpRequest();
//     adsHttp.open("GET", "googlefc.callbackQueue.push(googlefc.showRevocationMessage)", "async")
//     adsHttp.send();
// }
let bc = {
    backgroundColor: 'aqua',
    width: '10%',
    height: '10%'
} 
const Menu = (props) => {
    console.log(`menu ${props.ne}`)
    return (
        <nav style={{display: props.ne}}>
            <div style={{backgroundColor: props.bC}} className= {menuStyle.menuGrid}>
                <div className= {menuStyle.menuFlex}>
                <Link to= '/pads'><span style= {bc} className= {`${menuStyle.specific} ${topheaderstyle.logostyle}`} id= {menuStyle.space1}></span></Link>
                <Link to= '/high-tab'><span style= {bc} className= {`${menuStyle.specific} ${topheaderstyle.logostyle}`}></span></Link>
                <Link to= '/note-tab'><span style= {bc} className= {`${menuStyle.specific} ${topheaderstyle.logostyle}`}></span></Link>
                <Link to= '/minitab-note'><span style= {bc} className= {`${menuStyle.specific} ${topheaderstyle.logostyle}`}></span></Link>
                <Link to= '/tiles'><span style= {bc} className= {`${menuStyle.specific} ${topheaderstyle.logostyle}`} id= {menuStyle.space2}></span></Link>
                </div>
            </div>
        </nav>
        
    )
}

export default Menu;