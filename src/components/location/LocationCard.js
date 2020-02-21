import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="Location" /> */}
        </picture>
        <h3>
          Location: <span className="card-locationname">location name</span>
        </h3>
        <p>Address</p>
      </div>
    </div>
  );
};

export default LocationCard;