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
        {/* <h3>
          Name:
          <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p> */}
      </div>
      <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>
        Discharge
      </button>
      <div><Link to={`/animals/${props.animal.id}`}>
        <button>Details</button>
      </Link></div>
    </div>
  );
};

export default AnimalCard;
