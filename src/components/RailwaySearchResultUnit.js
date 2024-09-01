import React from "react";
import "./RailwaySearchResultUnit.css";

const RailwaySearchResultUnit=(props)=>{
    const {departure_time,arrival_time,classes,idNo,availablity,name,price}=props;
    return (
      <div className="railResultcomp">
        <div className="Identity_Name_compR">
          <div className="Identity_compR">
            <h4>{idNo}</h4>
          </div>
          <div className="Name_compR">
            <h4>{name}</h4>
          </div>
          <div className="classesAvail">
            <ul>
              {classes.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="time_price_componentR">
          <div className="timeComponent">
            <div className="departure_time_compR">
              <h4>Departure</h4>
              <h5>{departure_time}</h5>
            </div>
            <div className="arrival_time_compR">
              <h4>Arrival</h4>
              <h5>{arrival_time}</h5>
            </div>
          </div>
          <div className="price_componentR">
            <h4>Rs:{price}</h4>
          </div>
        </div>
        <div className="buttonSelectionsR">{
          availablity?<button className="bookButtonR">Book</button>:
          <button className="notifybuttonR">Notify</button>
          }
          
        </div>
      </div>
    );
}
export  default RailwaySearchResultUnit;