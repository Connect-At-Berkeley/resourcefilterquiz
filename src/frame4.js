import './Home.css';
import React, { Component, Fragment } from 'react';
import Select from 'react-select';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const choices = [
  { value: 'bioeng', label: 'Bioengineering' },
  { value: 'chem', label: 'Chemistry' },
  { value: 'chemeng', label: 'Chemical Engineering' },
  {value: 'chembio', label: "Chemical Biology"},
]

// const [selectedValue, setSelectedValue] = useState("");

const handleChange = e => {
      console.log("Selected it!")
      // setSelectedValue(e.value);
    }

function Frame4() {
  return (
    <div>
    <div className="resourcefinder">
      <h2> Resource Finder </h2>
    </div>
    <div className="container4">
    <div className="department">
      <h1> What department? </h1>
      <div style={{ color: "#056BA5"}}>
      <Select
            options = {choices}
            isMulti = {false}
            // value={choices.find(obj => obj.value === selectedValue)}
            // onChange={handleChange}
            />
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
export default Frame4;
