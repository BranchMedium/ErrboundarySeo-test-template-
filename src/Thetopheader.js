import React, {useRef, useReducer} from "react";
import Menu from "./Menu";
import topheaderstyle from "./Thetopheader.module.css";
import reducer from "./menuReducerHook";
// import {Link} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

//***********************************************************************************************
//************************************************* *
const TopHeader = (props) => {
        let top = {
            backgroundColor: props.background,
            borderBottom: props.border
        }
        
        //***********************************************************/
        let count = useRef(1);
        //***************************/
        function add1() {
            return count.current += 1;
        }
        let d = 'block';
        let i = 'ellipsis vertical icon';
        let d1 = 'none';
        let i1 = 'bars icon';
        let initialState;
        //******************************/
        initialState = {
            clickDisplay: 'none',
            clickIcon: 'bars icon',
        }
        let [newMenuElement, dispatch] = useReducer(reducer, initialState);
        let theNew = newMenuElement.clickDisplay;
        //******************************************************* */
        let showHide = (e) => {
            e.preventDefault();
            add1();
            dispatch({type: (count.current % 2) === 0? true: false, menuD: d, menuI: i, menuD1: d1, menuI1: i1});
            // dispatch({type: (count.current % 2) !== 0? false: true, menuD1: d1, menuI1: i1});
        }
        //*************************************************************************/
        // let blockNone = {
        //     display: props.myBlockmyNone,
        //     color: 'white'
        // }
        //************************ */
        console.log(`${count.current} count`);
        console.log(`${newMenuElement.clickDisplay} display`);
        console.log(`${newMenuElement.clickIcon} icon`);
        let wihi = {
            height: '100%',
            width: '15%',
            backgroundColor: 'aqua',
            outline: 'none'
        }
    return (
            <>
                <div style={top} className={topheaderstyle.headerstyle}>
                    <div className= {topheaderstyle.headerflex}>
                        <div style= {wihi}  className={topheaderstyle.logostyle}>
                        <a href= '' id= {topheaderstyle.forLink}></a>
                        </div>
                        {/* <div style= {blockNone} onClick= {showHide} id= {topheaderstyle.menu}>
                       {(count.current % 2 === 0? <i className= "ellipsis vertical icon"></i> : <i className= "bars icon"></i>)}
                        </div> */}
                    </div>
                </div>
           </>
    )
}
export default TopHeader;
