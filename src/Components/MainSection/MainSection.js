import React, { useEffect, useState } from "react";
import AllSpots from "../AllSpots/AllSpots";
import SelectedSpots from "../SelectedSpots/SelectedSpots";
import "./MainSection.css";

const MainSection = () => {
  const [items, setItem] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleWishbtn = (name) => {
    items.forEach((item) => {
      if (item.name === name) {
        if (selectedItems.indexOf(item) === -1) {
          const newItem = [...selectedItems, item];
          setSelectedItems(newItem);
        }
      }
    });
  };

  const handleDeletebtn = (item) => {
    const name = item.name;
    const newItem = selectedItems.filter((item) => item.name !== name);
    setSelectedItems(newItem);
  };

  return (
    // add div for all the contents
    <div className="main-section">
      {/* add a div to add the selected posts */}
      <div className="selected-spots">
        <SelectedSpots
          deletebtn={handleDeletebtn}
          selectedItems={selectedItems}
        ></SelectedSpots>
      </div>

      <h1>Tourist Attractions of Bangladesh</h1>

      {/* add another div for all the spots */}
      <div className="all-spots">
        {items.map((item) => (
          <AllSpots key={item.name} spot={item} btn={handleWishbtn}></AllSpots>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
