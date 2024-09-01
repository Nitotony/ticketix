import React, { useState } from "react";
import Select from "react-select";

import "../components/RailwaySearch.css";

const Destination_Prime = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

// const Class=[
  
//       { value: "sleeper", label: "Sleeper" },
//   { value: "seating", label: "Seating" },
//   { value: "ac", label: "AC" },
  
// ]

const Origin_Prime = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SearchStyle = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "solid rgb(65, 48, 223) 2px",
   
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign:"left",
  }),
};

const SelectStyle = {
  control: (provided) => ({
    ...provided,
    width: "100%",
    padding: "10px",
    borderRadius: "20px",
    border: "solid rgb(65, 48, 223) 2px",
  }),

  option:(provided)=>({
    ...provided,
  })
};




const RailwaySearchComp = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [PassClass,setPassClass]=useState("seating")
  const [passenger, setPassenger] = useState(1);

  

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
          <input
            type="date"
            id="Date"
            name="Date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div>
        {/* <div>
          <Select options={Class} styles={SelectStyle}
          onChange={(select)=>{
            setPassClass(select.value);
            
          }}
          placeholder="Class"
          />
        </div> */}

        <div className="Passenger_comp">
          <label htmlFor="Passenger">Passenger No.</label>
          <input
            type="number"
            id="Passenger"
            name="Passenger"
            min="1"
            max="10"
            onChange={(e) => {
              setPassenger(e.target.value);
            }}
            value={passenger}
          />
        </div>
      </div>
      <div className="search_comp_button">
        <button>Search</button>
      </div>
    </div>
  );
};

export default RailwaySearchComp;
