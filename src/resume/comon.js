import React from "react";
import { BrowserRouter as Router, Route, Link, Prompt } from "react-router-dom";
import Resume from './resume.js';

  
  
const PreventingTransitionsExample = () => (
  <Router>
    <div className = "tabContent">
      <div className = "tabWrap">
        <div>
          <Link to = "/">首页</Link>
        </div>
        <div>
          <Link to = "/detail">我的简历</Link>
        </div>
      </div>
      <Route path = "/" exact component = {Baner} />
      <Route path = "/detail"  component = {Resume} />
    </div>
  </Router>
);


class Baner extends React.Component {

  render () {
    return (
      <div className="banerContent">
        <img src={require("../img/baner.jpg")} />
      </div>
      )
  }
  shouldComponentUpdate(nextProps, nextState) {
    return false; 
  }
}

export default PreventingTransitionsExample;