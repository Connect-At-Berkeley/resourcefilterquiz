import './Home.css';
import image from './image1.png';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Frame2 from './frame2';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
    <div className="container">
    <div className="welcome">
      <h1> Welcome to the Resource Finder! </h1>
      <div className="findresources">
        <Link to="/frame2"><button className="button-style-home"> Find resources now! </button></Link>
      </div>
    </div>
      <img className="image1class" src={image} />
    </div>
    </div>

  );
}

export default Home;
