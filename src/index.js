//****************************** Alt-School Africa Exam******************************************************************
//                       NAME: OLUTOBI OLUSESI
//                               ID: ALT/SOE/022/5749
//                       SCHOOL: ENGINEERING
//                               TRACK: FRONT-END ENGINEERING
/** PROJECT 2
Setup a custom counter hook with increment, decrement, reset, setValue functions
with a valid UI and implement a combination of states with a useReducer that 
implements a counter with the four evident features in the custom hooks - 
increment, decrement, reset, setValue. Implement a page for the custom hook, useReducer, 404, 
and a page to test error boundary and good seo
 */
//****************************************************************************************************************
import React, {Component} from "react";
import ReactDOM from "react-dom/client";


class ErTestTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }
  componentDidCatch(error, info) {
    return this.setState({hasError: true})
  }
  render() {
    if(this.state.hasError) {
      return <h1>{/**Name the error here */} </h1>
    }
    return this.props.children
  }
}