import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Home';
import Frame2 from './frame2';
import Frame2b from './frame2b';
import Frame3 from './frame3';
import Frame4 from './frame4';
import Frame5 from './frame5';
import Frame6 from './frame6';


export default function App() {
  return (

    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Home">Home</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Home} path="/Home">
            <Home />
          </Route>
        </Switch>
      </div>


      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame2">frame2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame2} path="/frame2">
            <Frame2 />
          </Route>
        </Switch>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame2b">frame2b</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame2b} path="/frame2b">
            <Frame2b />
          </Route>
        </Switch>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame3">frame3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame3} path="/frame3">
            <Frame3 />
          </Route>
        </Switch>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame4">frame4</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame4} path="/frame4">
            <Frame4 />
          </Route>
        </Switch>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame5">frame5</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame5} path="/frame5">
            <Frame5 />
          </Route>
        </Switch>
      </div>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/frame6">frame6</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={Frame6} path="/frame6">
            <Frame6 />
          </Route>
        </Switch>
      </div>
    </Router>





  );
}
