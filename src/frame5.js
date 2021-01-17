import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frame6 from './frame6';
import Frame4 from './frame4';
import { Link } from 'react-router-dom';

function Frame5() {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container5">
    <div className="issuearea">
      <h1> What issue area? </h1>
      <div>
      <div className="issues">
        <Link to="/frame6"><button className="button-style-issue-area1"> Academics </button></Link>
        <Link to="/frame6"><button className="button-style-issue-area2"> Professional Development </button></Link>
        <Link to="/frame6"><button className="button-style-issue-area3"> Sports </button></Link>
      </div>
      <div>
        <Link to="/frame6"><button className="button-style-issue-area1"> Arts </button></Link>
        <Link to="/frame6"><button className="button-style-issue-area2"> Research </button></Link>
        <Link to="/frame6"><button className="button-style-issue-area3"> Other </button></Link>
      </div>
      </div>
    </div>
    </div>
    <div className="prevskip">
      <Link to="/frame4"><button className="button-style1"> Prev </button></Link>
      <Link to="/frame6"><button className="button-style1"> Next </button></Link>
    </div>
    </div>

  );
}

export default Frame5;
