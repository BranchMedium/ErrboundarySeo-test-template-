import React from "react";
import homeContentstyle1 from "./homecontent1.module.css";
// import homeContentstyle from "./homecontent.module.css";

const PadsContent = () => {
    return (
        <div style= {{backgroundColor: "black"}}>
            <section>
                <main>
                {/* *<!-- This usually contains the main content of  document, it should not contain repeated info.--> */}
                    <article className={homeContentstyle1.container}>
                    {/* *<!-- This usually contains much text area --> */}
                        {/* <div id={homeContentstyle.arrange} className={`${homeContentstyle.first} ${homeContentstyle.sameborder}`}>
                      
                        </div>
                        <div id={homeContentstyle.nowWorking} className={`${homeContentstyle.first} ${homeContentstyle.sameborder}`}>
                         
                        </div>
                        <div className={`${homeContentstyle.otherA} ${homeContentstyle.sameborder}`}>
                        
                        </div>
                        <div className={`${homeContentstyle.otherB} ${homeContentstyle.sameborder}`}>
                        
                        </div>
                        <div className={`${homeContentstyle.otherC} ${homeContentstyle.sameborder}`}>
                        
                        </div> */}
                        <div id= {homeContentstyle1.flex}>
                            <div id= {homeContentstyle1.aqua}></div>
                            <div id= {homeContentstyle1.blue}></div>
                            <div id= {homeContentstyle1.red}></div>
                            <div id= {homeContentstyle1.pink}></div>
                            <div id= {homeContentstyle1.green}></div>
                        </div>
                    </article>
                </main>
            </section>
        </div>
    )
}

export default PadsContent;