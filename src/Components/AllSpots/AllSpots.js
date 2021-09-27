import React from "react";
import "./AllSpots.css";

const AllSpots = (props) => {
  const {
    name,
    img,
    season,
    Attraction,
    location,
    cost,
    communication,
    stay,
    day,
  } = props.spot;

  return (
    <div className="card">
      <div>
        <img className="spot-photo" src={img} alt="thumbnail" />
      </div>
      <div className="spot-info">
        <h2>{name}</h2>
        <h5> {location}</h5>
        <div className="more-info">
          <p>
            Tourist Attractions:
            <br></br>
            {Attraction}
          </p>
          <p>Best time to go: {season}</p>
          <p>
            It'll take {day} days to explore {name}
          </p>
          <h4>Esimated Cost: {cost}</h4>
          <p>
            The communication process is {communication} and you can stay there
            in a {stay} place.
          </p>
        </div>
      </div>
      <button onClick={() => props.btn(name)}>
        <i className="fas fa-heart"></i> Add to Wish list
      </button>
    </div>
  );
};

export default AllSpots;
