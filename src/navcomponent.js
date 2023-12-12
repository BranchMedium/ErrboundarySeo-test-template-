import React from "react";
import NavStyle from "./navstyle.module.css";
import {Link} from "react-router-dom";

const TheNav = () => {
    return (
        <nav>
            <menu className={NavStyle.headerlink}>
            {/**<!-- This usually contains and mark as in a document --> */}
                <a className= {NavStyle.linkstyle}><Link to="/"><span>Home</span></Link></a>
                <a className={NavStyle.linkstyle1}><Link to="/about"><span>About</span></Link></a>
                <a className={NavStyle.linkstyle2}><Link to="/service"><span>Services</span></Link></a>
            </menu>
        </nav>
    )
}
export default TheNav;