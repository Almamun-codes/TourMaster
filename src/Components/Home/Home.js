import React, { useState } from "react";
import usePlaces from "../../usePlaces/usePlaces";
import AllSpots from "../AllSpots/AllSpots";
import { addToDb } from "../LocalStorage/LocalStorage";

const Home = () => {
  //call usePlaces to get all the data of places
  const data = usePlaces();

  //add a state to track button click
  const [names, setNames] = useState([]);

  const handleWishbtn = (name) => {
    data.forEach((item) => {
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

  // get few data from the list
  const places = data.slice(0, 4);

  // add a dynamic classname to hide items

  return (
    <div className="my-3">
      <h1 className="text-center">Featured Places</h1>
      <hr />
      <div className="row m-3">
        {places.map((place) => (
          <AllSpots
            key={place.name}
            btn={handleWishbtn}
            class="d-none"
            spot={place}
          ></AllSpots>
        ))}
      </div>
    </div>
  );
};

export default Home;
