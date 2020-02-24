import React from "react";
import { tsPropertySignature } from "@babel/types";

const LocationCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="Location" /> */}
        </picture>
        <h3>
          Location: <span className="card-locationname">{props.location.location}</span>
        </h3>
        <p>Address: {props.location.address}</p>
      </div>
    </div>
  );
};

export default LocationCard;