import React from "react";

const Window=(props)=>{
  const {screenshotUrl}=props
    return(
        <div className="ipad-window">
            <div className="dots">
              <div className='dot'>""</div>
              <div className='dot'>""</div>
              <div className='dot'>""</div>
            </div>
            <div className="screen">
              <img src={screenshotUrl} alt="Webpage Screenshot" height="400" width="300"/>
            </div>    
            {props.scan&&<div className="scan-line"></div>}
        </div>
    )
}
export default Window;