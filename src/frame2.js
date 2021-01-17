import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frame2b from './frame2b';
import Home from './Home';
import { Link } from 'react-router-dom';

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
        <Link to="/frame2b"><button className="button-style"> Basic Needs </button></Link>
        <Link to="/frame2b"><button className="button-style-a"> Student Success </button></Link>
      </div>
    </div>
    </div>
    <div className="prevskip">
      <Link to="/Home"><button className="button-style1"> Prev </button></Link>
      <Link to="/frame2b"><button className="button-style1"> Next </button></Link>
    </div>
    </div>

  );
}

export default Frame2;
