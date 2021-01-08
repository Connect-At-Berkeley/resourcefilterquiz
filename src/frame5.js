import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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
        <button className="button-style-issue-area1"> Academics </button>
        <button className="button-style-issue-area2"> Professional Development </button>
        <button className="button-style-issue-area3"> Sports </button>
      </div>
      <div>
        <button className="button-style-issue-area1"> Arts </button>
        <button className="button-style-issue-area2"> Research </button>
        <button className="button-style-issue-area3"> Other </button>
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

export default Frame5;
