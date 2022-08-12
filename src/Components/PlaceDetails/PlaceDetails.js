import React from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";

const PlaceDetails = () => {
  const { placeId } = useParams();
  const [place, setPlace] = useState({});

  fetch(`http://localhost:4000/places/${placeId}`)
    .then((res) => res.json())
    .then((data) => setPlace(data));

  return (
    <div className="App">
      <div className="container">
        <div>
          <img src={place?.img} className="img-fluid" alt={place?.name} />
        </div>
        <div className="spot-info">
          <h2 className="text-center">{place?.name}</h2>
          <h5 className="text-center"> {place?.location}</h5>
          <div className="more-info">
            <p>
              <strong>Tourist Attractions:</strong>
              <br></br>
              {place?.attraction}
            </p>
            <p>Best time to go: {place?.besttime}</p>
            <p>
              It'll take {place?.time} days to explore {place?.name}
            </p>
            <h4>Estimated Cost: {place?.cost}</h4>
            <p>
              The communication process is {place?.road} and you can stay there
              in a {place?.stay} place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetails;
