import React from "react";
import { tsPropertySignature } from "@babel/types";
import "./Animal.css"

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>Name:
           <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
      <button type="button" onClick={() => props.deleteAnimal(props.animal.id)}>Discharge</button>
    </div>
  );
};

export default AnimalCard;