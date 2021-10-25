import { useEffect, useState } from "react";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);

  //add useeffect to load data
  useEffect(() => {
    fetch("http://localhost:4000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return places;
};

export default usePlaces;
