import React, {component} from "react";
import ReactDOM from "react-dom";

class ErrorBoundaryBranch extends component {
  constructor(props) {
    this.super(props);
    this.state = {hasError: false};
  }
  componentDidCatch(error, info) {
    return this.setState({hasError: true})
  }
  render() {
    if(this.state.hasError === true) {
      return <h1>{/* Type here, inside this h1 tag
          "The Name of the Component" and write a custom error of any type you want */}Error Here</h1>
  }

    return (
      <div>
          {/*this.props.children*/}
      </div>
    )
  }
}


export default ErrorBoundaryBranch








//Copy and paste in new files(multiple)  to reuse this ErrorBoundaryBranch component