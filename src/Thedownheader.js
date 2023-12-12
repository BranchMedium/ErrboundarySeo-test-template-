import React, {useEffect} from "react";
import downheaderstyle from "./Thedownheader.module.css";
// import vars from "../Thedownheader.module.css";

/*************************fj7****y****f*****r************************************/
const DownHeader = (props) => {
                                                                                    // cannot read properties of gridTemplateRows
    let r = document.querySelector(':root');
    useEffect(() => {
        if(props.divide[0] === 2) {
            r.style.setProperty('--size1', '100px');
            r.style.setProperty('--size2', '100px');
            r.style.setProperty('--size3', '120px');
            r.style.setProperty('--size4', '120px');
            r.style.setProperty('--size5', '150px');
            r.style.setProperty('--size6', '200px');
            r.style.setProperty('--size7', '200px');
            r.style.setProperty('--size8', '240px');
            r.style.setProperty('--size9', '200px');
            r.style.setProperty('--size10', '240px');
            r.style.setProperty('--size11', '195px');
            r.style.setProperty('--size12', '160px');
            r.style.setProperty('--size13', '280px');
            r.style.setProperty('--size14', '300px');
            r.style.setProperty('--size15', '330px');
            r.style.setProperty('--size16', '360px');
            r.style.setProperty('--size17', '380px');
            r.style.setProperty('--size18', '420px');
            r.style.setProperty('--size19', '440px');
            r.style.setProperty('--size20', '500px');
        } 
        else {
            r.style.setProperty('--size1', '120px');
            r.style.setProperty('--size2', '180px');
            r.style.setProperty('--size3', '190px');
            r.style.setProperty('--size4', '220px');
            r.style.setProperty('--size5', '230px');
            r.style.setProperty('--size6', '290px');
            r.style.setProperty('--size7', '260px');
            r.style.setProperty('--size8', '310px');
            r.style.setProperty('--size9', '300px');
            r.style.setProperty('--size10', '420px');
            r.style.setProperty('--size11', '390px');
            r.style.setProperty('--size12', '320px');
            r.style.setProperty('--size13', '335px');
            r.style.setProperty('--size14', '345px');
            r.style.setProperty('--size15', '490px');
            r.style.setProperty('--size16', '450px');
            r.style.setProperty('--size17', '500px');
            r.style.setProperty('--size18', '500px');
            r.style.setProperty('--size19', '630px');
            r.style.setProperty('--size20', '800px');
        }
    },[])
    
    // let bigGrid = getComputedStyle(r);

    let theStyleForHeader = {
        backgroundColor: props.backColor,
        backgroundImage: props.backImage,
        // borderTop: 'red solid 5px'
    }
    let theStyleForContent = {

        backgroundColor: props.frontColor
    }
    let theStyleForH1$2H5 = {
        color: props.textColor,

        marginLeft: props.whatMargin[0],
        textAlign: props.textAlignment


       

    }
    return (
            <div style={theStyleForHeader} id= {downheaderstyle.homeheader}>
                <div style= {theStyleForContent} id= {downheaderstyle.homeheadercontent}>
                    <h1 style= {theStyleForH1$2H5} id= {downheaderstyle.mainH1} className= {`${downheaderstyle.lefter}`}>{props.h1}</h1>
                    <h1 style= {theStyleForH1$2H5} className= {downheaderstyle.lefter} id= {downheaderstyle.first}>{props.firstH5}</h1>
                    <h1 style= {theStyleForH1$2H5} id= {downheaderstyle.second} className= {downheaderstyle.lefter}>{props.secondH5}</h1>    
                </div>
            </div>
    )
}
export default DownHeader;
