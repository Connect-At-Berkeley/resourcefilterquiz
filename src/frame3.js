import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Frame3() {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container3">
    <div className="college">
      <h1> What college? </h1>
    <div className="colleges">
      <div>
        <button className="button-style3a"> CoC </button>
        <button className="button-style3b"> CoE </button>
        <button className="button-style3c"> CED </button>
      <div>
        <button className="button-style3a"> L&S </button>
        <button className="button-style3b"> CNS </button>
        <button className="button-style3c"> Haas </button>
      </div>
      </div>
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

export default Frame3;
