import React from "react";
import DownHeader from "./Thedownheader";
// import {Outlet} from "react-router-dom";
// import myStyleLayout from "./webstylelayout.module.css";
// import TheNav from "./navcomponent";

import Menu from "./Menu"
import TopHeader from './Thetopheader'
const Layout = () => {
    return(
        <>
            <TopHeader border= '' background= "black"/>
            <Menu bC= 'black' ne= 'block'/>
            <DownHeader whatMargin= {['']} divide= {[-1]} textAlignment= 'left' backImage= {`url(${''})`} backColor= "black" frontColor= 'aqua' h1 = "" firstH5= "" secondH5= ""/>
            {/* <TheNav/> */}
            {/* <Outlet/> */}
        </>
    )
}
export default Layout;