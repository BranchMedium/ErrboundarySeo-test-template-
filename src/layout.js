import React from "react";
import {Outlet, Link} from "react-router-dom";
import myStyleLayout from "./webstylelayout.module.css";

const Layout = () => {
    return(
        <>
            <header id={myStyleLayout.topHeader}>
            {/**<!-- This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
                <h1>The <span>5</span> CO - HEPA</h1>
            </header>
            <section id={myStyleLayout.topstyle}>
            {/** <!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <nav>
                {/**<!-- This usually contains links, for major blocks of navigation links --> */}
                    <menu>
                    {/**<!-- This usually contains and mark buttons in a document --> */}
                        <button className={myStyleLayout.wego}><Link to="/">Home</Link></button>
                        <button><Link to="/about">About</Link></button>
                        <button><Link to="/service">Services</Link></button>
                    </menu>
                </nav>
            </section>
            <Outlet/>
        </>
    )
}

export default Layout;