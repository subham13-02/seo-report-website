import React from "react";

const Bar=  (props)=>{
    const {label,value}=props;
    const barStyle={
        backgroundColor:'orange',
        padding:'0.2rem',
        borderRadius: '10px',
        width:`${value}%`,
        height:'30px',
        textAlign: 'center',
    };

    return(
        
        <div className="bar" style={barStyle}>{label} {value}%</div>
    )
}
export default Bar;
