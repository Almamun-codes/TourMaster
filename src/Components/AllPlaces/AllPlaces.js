import React, { useState } from "react";
import usePlaces from "../../usePlaces/usePlaces";
import AllSpots from "../AllSpots/AllSpots";
import { addToDb } from "../LocalStorage/LocalStorage";

const AllPlaces = () => {
  //call usePlaces to get all the data of places
  const places = usePlaces();

  //add a state to track button click
  const [names, setNames] = useState([]);

  const handleWishbtn = (name) => {
    places.forEach((item) => {
      if (item.name === name) {
        if (names.indexOf(item) === -1) {
          const newItem = [...names, item];
          setNames(newItem);
          addToDb(name);
          window.document.location.reload();
        }
      }
    });
  };

  return (
    <div>
      <h2 className="text-center my-3">Explore All the places</h2>
      <div className="row mx-2">
        {places.map((spot) => (
          <AllSpots
            key={spot.name}
            btn={handleWishbtn}
            spot={spot}
            class="d-block"
          ></AllSpots>
        ))}
      </div>
    </div>
  );
};

export default AllPlaces;
