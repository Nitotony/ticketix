import React from "react";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import RailwaySearchResultUnit from "../components/RailwaySearchResultUnit"
import Navbar from "../components/Navbar";
import "./RailSearchResult.css";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { BsSunset } from "react-icons/bs";
import { BsSunrise } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
const RailSearchResult=()=>{
     const [minval,setMinvalue]=useState(100);
     const [maxval,setMaxvalue]=useState(3000);

    return (
      <div>
        <Navbar />

        <div className="RailResultcontainer">
          <div className="RailResultMod">
            <div className="PricesetR">
              <div className="RailrangeSlider">
                <RangeSlider
                  onInput={(value, user) => {
                    if (!user) {
                      setMinvalue(value[0]);
                      setMaxvalue(value[1]);
                    } else {
                      console.log("user did not touch");
                    }
                  }}
                  min={100}
                  max={3000}
                  value={[minval, maxval]}
                />
              </div>

              <div className="RailPriceSet">
                <p>min price: {minval}</p>
                <p>max price: {maxval}</p>
              </div>
            </div>

            <div className="timeSelectionRail">
              <div className="earlymorning">
                <BsSunrise />
              </div>
              <div className="morning">
                <BsSun />
              </div>
              <div className="evening">
                <BsSunset />
              </div>
              <div className="night">
                <BsMoon />
              </div>
            </div>
          </div>
          <div className="RailresultsContainer">
            <div className="RailresultHead">
              <div className="ArrivalRailResult"></div>
              <div className="DirectionR">
                <div>sdfasd</div>
                <span>
                  <BsArrowRight />
                </span>
                <div>sdfs</div>
              </div>
              <div className="DestRailResult"></div>
            </div>
            <div className="Railrecontainer">
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
                availablity={true}
                name="pudusheryExpress"
                price={100}
                classes={["seat", "standin", "bed"]}
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
                availablity={true}
                name="pudusheryExpress"
                price={100}
                classes={["seat", "standin", "bed"]}
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
                classes={["standin", "bed"]}
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