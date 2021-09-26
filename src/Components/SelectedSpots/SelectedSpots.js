import React from "react";
import ShowItem from "../ShowItem/ShowItem";
import "./SelectedSpots.css";

const SelectedSpots = (props) => {
  const selectedItems = props.selectedItems;
  let total = 0;
  const cost = selectedItems.map((item) => (total += item.cost));

  let className = "";
  if (selectedItems.length === 0) {
    className = "hidden";
  } else {
    className = "block";
  }
  return (
    <div>
      <h1 className={className}>Places you wish to go</h1>
      <div className="wish-container">
        <div className="parent-card">
          {selectedItems.map((item) => (
            <ShowItem key={item.name} item={item}></ShowItem>
          ))}
        </div>

        <div className={className} id="your-info">
          <h2>Your Info</h2>

          <h4>Your Budget: 30000 BDT</h4>
          <h4>Total Cost: {total} BDT</h4>
          <p>Places to visit: {selectedItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedSpots;
