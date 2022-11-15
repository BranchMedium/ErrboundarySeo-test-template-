import React from "react";
import myStyleAbout from "./webstyleabout.module.css";
import Footer from "./footer";
import Layout from "./layout";


const About = () => {
    return(
        <>
        <Layout/>
            <section id={myStyleAbout.aboutBac}>
            {/**<!-- This usually defines section of codes of each of a content - for organizing and styling our document  --> */}
                <main>
                {/**<!-- This usually contains the main content of  document, it should not contain repeated info.--> */}
                    <article>
                    {/**<!-- This usually contains much text area --> */}
                        <div>
                            <h2>What we do</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio rem tenetur maxime vitae ullam 
                                sequi quo ipsa molestiae eligendi labore. Quas, dolorem nesciunt. Veritatis nesciunt fugit volupta
                                tibus saepe alias adipisci. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga totam 
                                excepturi unde mollitia culpa! Totam veritatis neque consequatur repellendus nemo quasi velit soluta qua. Lorem ipsum d
                                olor sit amet consectetur adipisicing elit. Alias mollitia dolorum magnam cumque vero magni nesciunt dicta voluptatum a nulla mod
                                i commodi, libero totam animi est dignis
                                simos enim necessitatibus illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nisi, ipsa aliquid tenetur harum q
                                uibusdam pariatur dignissimos odio provident reiciendis 
                                perferendis, ullam molestias blanditiis eos. Magni eius aspernatur voluptas vero. Lorem ipsum dolor sit amet consectetur adipisicin
                                g elit. Sit pariatur provident fugit facere aliquid explicabo debitis porro! Eum alias v
                                oluptas ad minima! Dolore sit exercitationem quos voluptatibus? Repellendus, facilis quae? Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Nihil ea veritatis in consequatur ratione harum quod, ducimus
                                , nisi unde tempore eligendi fuga, labore esse id cupiditate eveniet magnam dolores autem? Lorem ipsum dolor sit amet cons
                                ectetur adipisicing elit. Dignissimos praesentium, nam repellendus provident suscipit maxime voluptatem ipsam rem molestias modi
                                , ducimus sapiente minima vel inventore aperiam. Provident aut voluptatem ducimus.
                            </p>
                        </div>
                    </article>
                </main>
            </section>
            <Footer/>
        </>
    )
}

export default About;