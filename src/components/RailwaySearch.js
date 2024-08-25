import React, { useState } from "react";
import Select from "react-select";

import "../components/RailwaySearch.css";
import { CiTextAlignLeft } from "react-icons/ci";

const Destination_Prime = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];


const Origin_Prime = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];


const SearchStyle = {
  control: (provided) => ({
    ...provided,
    width: "400px",
    borderRadius: "10px",
    border: "solid  rgb(194, 224, 250) 2px",
  }),
  option: (provided, state) => ({
    ...provided,
  }),
};

const RailwaySearch_comp=()=>{
    const [Origin,setOrigin] =useState("");
    const [Destination,setDestination]=useState("");


    return (
      <div className="search_comp">
        <h3>Choose Your stations</h3>
        <div className="Rail_variables">
          <div className="Origin_comp">
           
            <Select
              name="Origin"
              options={Origin_Prime}
              onChange={(origin) => {
                setOrigin(origin.value);
              }}
              styles={SearchStyle}
              placeholder="Origin"
            />
          </div>

          <div className="Destination_comp">
         
            <Select
              name="Destination"
              options={Destination_Prime}
              onChange={(destination) => {
                setDestination(destination.value);
              }}
              styles={SearchStyle}
              placeholder="Destination"
            />
          </div>
          <div className="Date_comp">
            <label htmlFor="Date">Date</label>
            <input type="date" id="Date" name="Date" />
          </div>

          <div className="Time_comp">
            <label htmlFor="time">Time</label>
            <input type="time" name="time" />
          </div>
        </div>
        <div className="search_comp_button">
          <button>Search</button>
        </div>
      </div>
    );

   
}


export default RailwaySearch_comp;