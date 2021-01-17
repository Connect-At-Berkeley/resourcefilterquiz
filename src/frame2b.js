import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frame3 from './frame3';
import Frame2 from './frame2';
import { Link } from 'react-router-dom';

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
        <Link to="/frame3"><button className="button-style2b1"> Health </button></Link>
        <Link to="/frame3"><button className="button-style2b2"> Housing </button></Link>
        <Link to="/frame3"><button className="button-style2b3"> DEI </button></Link>
      </div>
      <div>
        <Link to="/frame3"><button className="button-style2b1"> COVID-19 </button></Link>
        <Link to="/frame3"><button className="button-style2b2"> Financial Aid </button></Link>
        <Link to="/frame3"><button className="button-style2b3"> Other </button></Link>
      </div>
    </div>
    </div>
    <div className="prevskip">
      <Link to="/frame2"><button className="button-style1"> Prev </button></Link>
      <Link to="/frame3"><button className="button-style1"> Next </button></Link>
    </div>
    </div>

  );
}

export default Frame2b;
