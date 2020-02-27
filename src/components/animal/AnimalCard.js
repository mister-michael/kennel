import React from "react";
import { Link } from "react-router-dom";
import "./Animal.css";

const AnimalCard = props => {
  console.log(props.animal.image);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={`${props.animal.image}`} alt="My Dog" />
        </picture>
      </div>
      <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>
        Discharge
      </button>
      <div>
        <Link to={`/animals/${props.animal.id}`}>
          <button>Details</button>
        </Link>
      </div>
      <button
        type="button"
        onClick={() => props.history.push(`/animals/${props.animal.id}/edit`)}
      >
        Edit
      </button>
    </div>
  );
};

export default AnimalCard;
