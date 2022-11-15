import React from "react";
import {Outlet, NavLink} from "react-router-dom";
import myStyleLayout from "./webstylelayout.module.css";

const Layout = () => {
    return(
        <>
            <header>
            {/**<!-- This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
                <h1>The <span>5</span> CO - HEPA</h1>
            </header>
            <section id={myStyleLayout.topstyle}>
            {/** <!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <nav>
                {/**<!-- This usually contains links, for major blocks of navigation links --> */}
                    <menu>
                    {/**<!-- This usually contains and mark buttons in a document --> */}
                        <button className={myStyleLayout.wego}><NavLink to="/">Home</NavLink></button>
                        <button><NavLink to="/about">About</NavLink></button>
                        <button><NavLink to="/service">Services</NavLink></button>
                    </menu>
                </nav>
            </section>
            <Outlet/>
        </>
    )
}

export default Layout;