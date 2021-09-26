import React from "react";
import "./ShowItem.css";

const ShowItem = (props) => {
  const { name, cost, img, day } = props.item;
  return (
    <div className="small-card">
      <img src={img} alt="location" />
      <div className="info">
        <h3>{name}</h3>
        <p>Cost: {cost}</p>
        <p>{day}day(s) nedded.</p>
      </div>
    </div>
  );
};

export default ShowItem;
