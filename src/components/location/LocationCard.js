import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="Location" /> */}
        </picture>
        <h3>
          Location:{" "}
          <span className="card-locationname">{props.locationObject.location}</span>
        </h3>
        <p>Address: {props.locationObject.address}</p>
      </div>
      <button
        type="button"
        onClick={() => props.deleteLocation(props.locationObject.id)}
      >
        Close Location
      </button>
      <Link to={`/locations/${props.locationObject.id}`}>
        <button>Details</button>
      </Link>
      <button
        type="button"
        onClick={() => props.history.push(`/locations/${props.locationObject.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default LocationCard;
