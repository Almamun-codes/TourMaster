import React from "react";
import "./ShowItem.css";

const ShowItem = (props) => {
  const { name, cost, img } = props.item;
  return (
    <div id={name} className="small-card">
      <img src={img} alt="location" />
      <div className="info">
        <h3>{name}</h3>
        <p>Cost: {cost}</p>
        <div className="btn">
          <button onClick={() => props.deletebtn(props.item)}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
