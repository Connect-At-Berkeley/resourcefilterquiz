import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Frame2b () {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container2b">
    <div className="question">
      <h1> What area? </h1>
      <div className="area1">
        <button className="button-style2b1"> Health </button>
        <button className="button-style2b2"> Housing </button>
        <button className="button-style2b3"> DEI </button>
      </div>
      <div>
        <button className="button-style2b1"> COVID-19 </button>
        <button className="button-style2b2"> Financial Aid </button>
        <button className="button-style2b3"> Other </button>
      </div>
    </div>
    </div>
    <div className="prevskip">
      <button className="button-style1"> Prev </button>
      <button className="button-style1"> Skip </button>
    </div>
    </div>

  );
}

export default Frame2b;
