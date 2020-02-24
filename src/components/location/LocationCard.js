import React from "react";
import { tsPropertySignature } from "@babel/types";
import "./Location.css"

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
      <button type="button" onClick={() => props.deleteLocation(props.location.id)}>Close Location</button>
    </div>
  );
};

export default LocationCard;