import React from "react";
import myStyleFooter from "./webstylefooter.module.css";


const Footer = () => {
    return (
        <>
            <footer className={myStyleFooter.foot}>
            {/**<!-- This defines the footer for a document --> */}
                <section>
                {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                    <address className={myStyleFooter.contact}>
                        <div>
                            <img src="insta.png" alt="instagram" height="50px" width="50px"/>
                        </div>
                        <div>
                            <img src="twi.png" alt="twitter" width="50px" height="50px"/>
                        </div>
                        <div>
                            <img src="face.png" alt="Facebook" width="50px" height="50px"/>
                        </div>
                        <div>
                            <details>
                                <summary>About</summary>
                                <h4>CO-hepa &copy;2020</h4>
                            </details>
                        </div>
                    </address>
                </section>
            </footer>
        </>
    )
}
export default Footer;