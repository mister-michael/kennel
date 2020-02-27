import React from "react";
import { Link } from "react-router-dom";
import "./Owner.css";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Name: <span className="card-ownername">{props.owner.name}</span>
        </h3>
        <p>Phone: {props.owner.phone}</p>
      </div>
      <button type="button" onClick={() => props.deleteOwner(props.owner.id)}>
        Discharge
      </button>
      <Link to={`/owners/${props.owner.id}`}>
        <button>Details</button>
      </Link>
      <button
        type="button"
        onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default OwnerCard;
