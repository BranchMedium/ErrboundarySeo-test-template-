import React from "react";
import myStyleSubscribe from "./webstylesubscribe.module.css";



const Subscribe = () => {
    return(
        <>
            <section id={myStyleSubscribe.atLast}>
            {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <div>
                    <h5>Subscribe to Our News-letter</h5>
                </div>
                
                <div>
                    <form>
                        <input type="email" id="em" placeholder="Enter Email..."/>
                        <input type="submit" id="sub" value="Subscribe"/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Subscribe;