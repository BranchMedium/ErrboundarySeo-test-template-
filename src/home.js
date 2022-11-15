import React from "react";
import myStyleHome from "./webstylehome.module.css";
import Footer from "./footer";
import Layout from "./layout";



const Home = () => {
    return(
        <>
        <Layout/>
            <header id={myStyleHome.added}>
            {/**<!--  This usually contains logo, fundamental info, introductory content and some nav links if required --> */}
                <section id={myStyleHome.pic}>
                {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                    <div id={myStyleHome.overlay}>
                        
                        <p>Welcome to the co-hepa site</p>
                        <p>We help others to become a better version of themselves by coaching, quick understanding and instruction</p>
                        <p>We Can Do It</p>
                    </div>
                </section>
            </header>
            <section id={myStyleHome.firstSec}>
            {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <main>
                {/**<!-- This usually contains the main content of  document, it should not contain repeated info.--> */}
                    <article className={myStyleHome.firstArt}>
                    {/**<!-- This usually contains much text area --> */}
                        <div>
                            <h3>Health</h3>
                            <p>
                                We are better served with good health coaching skills at your disposal. You deserve<br/>
                                The Best strong, clean and happy version of yourself. 
                            </p>
                        </div>
                        <div>
                            <h3>Confidence</h3>
                            <p>
                                We know your pain, we know your right to gain. Confidence is the right attitude to live right
                                We were there before, We are here to teach Confidence and better we go together.
                            </p>
                        </div>
                    </article>
                    <article className={myStyleHome.firstArt}>
                    {/**<!-- This usually contains much text area --> */}
                        <div>
                            <h3>Goals</h3>
                            <p>
                                Life is made sweet with lively goals. Two things better served, seen and being together makes better
                                We are here to make two better versions of yourself.
                            </p>
                        </div>
                        <div>
                            <h3>Marriage</h3>
                            <p>
                                Life is enjoyable when you meet the Love of your Life. The remains of your perfection. The complete different version
                                of yourself, curved for your desire and endued for your needs.
                            </p>
                            <p>We Know Love</p>
                        </div>
                    </article>
                    <article id={myStyleHome.lastArt}>
                    {/**<!-- This usually contains much text area --> */}
                        <div>
                            <h3>Career</h3>
                            <p>
                                I don't know what career my is?, Why do I always fail?.
                                We tell you every man experience this at a point. A little change of course is what you need. A little change of style is what
                                need. <mark>STOP!! STOP! that.</mark> 
                            </p>
                        </div>
                    </article>
                </main>
            </section>
            <Footer/>
        </>
    )
}

export default Home;