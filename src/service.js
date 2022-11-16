import React from "react";
import myStyleService from "./webstyleservice.module.css";
import Footer from "./footer";
import Subscribe from "./subscribe";
import Layout from "./layout";


const Service = () => {
    return(
        <>
        <Layout/>
            <section id={myStyleService.serbac}>
            {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <main>
                {/**<!-- This usually contains the main content of  document, it should not contain repeated info.--> */}
                    <section>
                    {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                        <article id={myStyleService.last}>
                        {/**<!-- This usually contains much text area --> */}
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nihil eveniet nam distinctio quae autem sunt
                                    quis tenetur molestiae. Corrupti blanditiis commodi tenetur vel placeat sit soluta natus obcaecati odit.
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elue mollitia veritatisro et.
                                </p>
                            </div>
                        </article>
                    </section>
                    <section>
                    {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                        <article id={myStyleService.healEnvi}>
                        {/**<!-- This usually contains much text area --> */}
                            <div>
                                <h2>Human Health Care</h2>
                                <figure>
                                {/** <!-- This usually contains Images or diagram for illustration, tables, code-listing images. This tag needs figcaption to be used inside it --> */}
                                    <img src="health.png" alt="my health image" width="90px" height="80px"/>
                                    <figcaption>
                                    {/**<!-- This usually contains content which describes the figure tag being used as it parent tag --> */}
                                        
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur culpa cum totam, d
                                            electus a saepe molestiae labore repellendus in laudantium fugiat fugit sit incidunt v
                                            ero natus dolor consequatur, minus sapiente?
                                        
                                    </figcaption>
                                </figure>
                            </div>
                            <div>
                                <h2>Environmental Sanity Education</h2>
                                <figure>
                                {/**<!-- This usually contains Images or diagram for illustration, tables, code-listing images. This tag needs figcaption to be used inside it --> */}
                                    <img src="envi.png" alt="Environment" width="90px" height="100px"/>
                                    <figcaption>
                                    {/**<!-- This usually contains content which describes the figure tag being used as it parent tag --> */}
                                        
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quasi, nihil facere repellendus
                                            beatae reprehenderit rerum voluptate e
                                            aque mollitia. Eligendi similique temporibus possimus nisi ut modi quisquam omnis consectetur vero?
                                    
                                    </figcaption>
                                </figure>
                            </div>
                        </article>
                    </section>
                </main>
            </section>
            <Subscribe/>
            <Footer/>
        </>
    )
}

export default Service;