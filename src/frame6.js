import './Home.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Select from 'react-select';
import Frame5 from './frame5';
import { Link } from 'react-router-dom';

const choices = [
  { value: 'perf', label: 'Performing Arts & Theater' },
  { value: 'pharm', label: 'Pharmaceuticals' },
  { value: 'phil', label: 'Philosophy' },
  {value: 'politics', label: "Politics"},
]

// const [selectedValue, setSelectedValue] = useState("");

const handleChange = e => {
      console.log("Selected it!")
      // setSelectedValue(e.value);
    }


function Frame6() {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container6">
    <div className="industry">
      <h1> What industry? </h1>
      <div style={{ color: "#056BA5"}}>
      <Select
            options = {choices}
            isMulti = {false}
            />
      </div>
    </div>
    </div>
    <div className="prevskip">
      <Link to="/frame5"><button className="button-style1"> Prev </button></Link>
      <button className="button-style1"> Next </button>
    </div>
    </div>

  );
}

export default Frame6;
