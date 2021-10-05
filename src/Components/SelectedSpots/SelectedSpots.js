import React from "react";
import ShowItem from "../ShowItem/ShowItem";
import "./SelectedSpots.css";

const SelectedSpots = (props) => {
  const selectedItems = props.selectedItems;

  // calculate total cost
  let total = 0;
  selectedItems.forEach((element) => {
    total += element.cost;
  });

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
        <div className="parent-card" id="parent-div">
          {selectedItems.map((item) => (
            <ShowItem
              key={item.name}
              deletebtn={props.deletebtn}
              item={item}
            ></ShowItem>
          ))}
        </div>

        <div className={className}>
          <div className="your-info">
            <h2>Your Info</h2>

            <h4>Your Budget: 30000 BDT</h4>
            <h4>Total Cost: {total} BDT</h4>
            <p>Places to visit: {selectedItems.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedSpots;
