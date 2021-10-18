import React, { useEffect, useState } from "react";
import { getFromDb, removeDb } from "../LocalStorage/LocalStorage";
import ShowItem from "../ShowItem/ShowItem";
import "./SelectedSpots.css";

const SelectedSpots = () => {
  const [places, setPlaces] = useState([]);

  //add useeffect to load data
  useEffect(() => {
    fetch("./places.JSON")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (places.length) {
      const itemNames = getFromDb();
      const newArray = [];
      for (const name in itemNames) {
        const newItem = places.find((place) => place.name === name);
        newArray.push(newItem);
      }
      setSelectedItems(newArray);
    }
  }, [places]);

  // handle delete button
  const handledeletebtn = (item) => {
    const myArray = [];
    selectedItems.forEach((element) => {
      if (element.name !== item.name) {
        myArray.push(element);
      }
    });
    setSelectedItems(myArray);
    removeDb(item.name);
    window.document.location.reload();
  };

  // calculate total cost
  let total = 0;
  selectedItems.forEach((element) => {
    total += element.cost;
  });

  let shownoitem = "";
  let className = "";
  if (selectedItems.length === 0) {
    className = "hidden";
    shownoitem = "block";
  } else {
    className = "block";
    shownoitem = "hidden";
  }

  return (
    <div>
      <h1 className={className}>Places you wish to go</h1>
      <div className="d-flex">
        <div className="container row">
          {selectedItems.map((item) => (
            <ShowItem
              key={item.name}
              deletebtn={handledeletebtn}
              item={item}
            ></ShowItem>
          ))}
        </div>

        <div className={className}>
          <div className="border p-2">
            <h4>Your Info</h4>

            <p>Your Budget: 30000 BDT</p>
            <p>Total Cost: {total} BDT</p>
            <p>Places to visit: {selectedItems.length}</p>
          </div>
        </div>
      </div>
      <div className={shownoitem}>
        <div>
          <img
            className="w-50"
            src="https://cdn.dribbble.com/users/453325/screenshots/5573953/empty_state.png"
            alt="Nothing found"
          />
        </div>

        <h1>Nothing is in your favourite places</h1>
        <p>Please add a place in favourite</p>
      </div>
    </div>
  );
};

export default SelectedSpots;
