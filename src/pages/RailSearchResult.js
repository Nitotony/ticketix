import React from "react";
import { BsArrowRight } from "react-icons/bs";
import RailwaySearchResultUnit from "../components/RailwaySearchResultUnit"
import Navbar from "../components/Navbar"

const RailSearchResult=()=>{
    return (
      <div>
        <Navbar />
        <div className="RailResultcontainer">
          <div className="RailResultMod">adjflkasjfdklfsdlkfjsdlf</div>
          <div className="RailresultsContainer">
            <div className="RailresultHead">
              <div className="ArrivalRailResult"></div>
              <div className="DirectionR">
                <span>
                  <BsArrowRight />
                </span>
              </div>
              <div className="DestRailResult"></div>
            </div>
            <div className="Railresultcontainer">
              <RailwaySearchResultUnit
                departure_time="17:20"
                arrival_time="20:20"
                idNo={2020}
                availablity={true}
                name="pudusheryExpress"
                price={100}
                classes={["seat", "standin", "bed"]}
              />
              <RailwaySearchResultUnit
                departure_time="17:20"
                arrival_time="20:20"
                idNo={2020}
                availablity={false}
                name="pudusheryExpress"
                price={100}
                classes={[ "standin", "bed"]}
              />
              <RailwaySearchResultUnit
                departure_time="17:20"
                arrival_time="20:20"
                idNo={2020}
                availablity={true}
                name="pudusheryExpress"
                price={100}
                classes={["seat", "standin", "bed"]}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default RailSearchResult;