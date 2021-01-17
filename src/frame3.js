import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frame4 from './frame4';
import Frame2b from './frame2b';
import { Link } from 'react-router-dom';

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
        <Link to="/frame4"><button className="button-style3a"> CoC </button></Link>
        <Link to="/frame4"><button className="button-style3b"> CoE </button></Link>
        <Link to="/frame4"><button className="button-style3c"> CED </button></Link>
      <div>
        <Link to="/frame4"><button className="button-style3a"> L&S </button></Link>
        <Link to="/frame4"><button className="button-style3b"> CNR </button></Link>
        <Link to="/frame4"><button className="button-style3c"> Haas </button></Link>
      </div>
      </div>
    </div>
    </div>
    </div>
    <div className="prevskip">
      <Link to="/frame2b"><button className="button-style1"> Prev </button></Link>
      <Link to="/frame4"><button className="button-style1"> Next </button></Link>
    </div>
    </div>

  );
}

export default Frame3;
