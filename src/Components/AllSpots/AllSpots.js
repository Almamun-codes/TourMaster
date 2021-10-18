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

  const showHide = props.class;

  const handleWishbtn = props.btn;

  return (
    <div className="col-lg-3 col-md-6 my-2">
      <div className="card h-100 pb-5 mb- position-relative">
        <div>
          <img className="card-img-top" src={img} alt="thumbnail" />
        </div>
        <div className="spot-info">
          <h2 className="text-center">{name}</h2>
          <h5 className="text-center"> {location}</h5>
          <div className="more-info">
            <p>
              <strong>Tourist Attractions:</strong>
              <br></br>
              {Attraction}
            </p>
            <p className={showHide}>Best time to go: {season}</p>
            <p className={showHide}>
              It'll take {day} days to explore {name}
            </p>
            <h4 className={showHide}>Estimated Cost: {cost}</h4>
            <p className={showHide}>
              The communication process is {communication} and you can stay
              there in a {stay} place.
            </p>
          </div>
        </div>

        <button
          className="position-absolute btn btn-success mb-2 bottom-0 start-50 translate-middle-x"
          onClick={() => handleWishbtn(name)}
        >
          <i className="fas fa-heart"></i>{" "}
          <span className="text-sm-fs-6">Add to Wish list</span>
        </button>
      </div>
    </div>
  );
};

export default AllSpots;
