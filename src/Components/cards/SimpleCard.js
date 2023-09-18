import React from "react";
import "./SimpleCard.css"

const SimpleCard=(props)=>{
    const {heading,value}=props;
    let finalValue=value;
    if(typeof(value)=='number'){
        finalValue=parseFloat(value.toFixed(5));
    }
    return(
        <div className="simpleCard" style={{alignItems:"center"}}>
            <h2>{finalValue}</h2>
            <p>{heading}</p>
        </div>
    )
}
export default SimpleCard;