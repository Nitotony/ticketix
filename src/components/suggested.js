import React from "react";


import "../components/suggested.css"



const Suggested=(props)=>{
    return(
        <div className="suge">
            <h4><span className="org">{props.org}</span>-
            <span className="dest">{props.dest}</span></h4>
            <div className="image">
                <img src={props.img} alt="" />
            </div>
            <button>Book Now</button>

        </div>
    )
}

export default Suggested;



