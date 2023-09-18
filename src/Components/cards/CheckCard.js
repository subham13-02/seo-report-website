import React from 'react';
import { IoCloseCircle,IoCheckmarkCircle } from 'react-icons/io5';
import "./CheckCard.css";
function CardItem(props) {
  const { heading, value,description }=props;
  return (
    <div className="checkCard">
      <div className="icon" >{(value)?<div className="red"><IoCloseCircle /></div>:<div className="green"><IoCheckmarkCircle/></div>}</div>
      <div className="content">
        <b>{heading}</b>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default CardItem;
