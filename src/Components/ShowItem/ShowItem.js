import React from "react";
import "./ShowItem.css";

const ShowItem = (props) => {
  const { name, cost, img } = props.item;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="d-flex position-relative my-2 border selected-card">
        <img src={img} className="left-img" alt="location" />
        <div className="text-start ms-2">
          <h4>{name}</h4>
          <p className="d-inline">Cost: {cost}</p>
          <div className="position-absolute bottom-0 end-0">
            <button
              onClick={() => props.deletebtn(props.item)}
              className=" bg-danger"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
