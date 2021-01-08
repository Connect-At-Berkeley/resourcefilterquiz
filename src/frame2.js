import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Frame2 () {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container2">
    <div className="question">
      <h1> What type of resource are you looking for? </h1>
      <div className="choose">
        <button className="button-style"> Basic Needs </button>
        <button className="button-style-a"> Student Success </button>
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

export default Frame2;
