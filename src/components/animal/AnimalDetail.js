import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalDetail.css";
import { firstLetterCase } from "../../modules/helpers";

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    AnimalManager.getAll().then(animal => {
      const foundAnimal = animal.find(element => element.id === props.animalId);
      if (foundAnimal) {
        console.log("if statement");
        setAnimal({
          name: foundAnimal.name,
          breed: foundAnimal.breed,
          image: foundAnimal.image
        });

        setIsLoading(false);
      }
    });
  }, [props.animalId]);

  if (animal.id === props.animalId) {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={`${animal.image}`} />
          </picture>
          <h3>
            Name: <span style={{ color: "darkslategrey" }}>{animal.name}</span>
          </h3>
          <p>Breed: {animal.breed}</p>
          <button
            type="button"
            disabled={isLoading}
            onClick={() => handleDelete(props.animalId)}
          >
            Discharge
          </button>
        </div>
      </div>
    );
  } else {
    return <h2>This Page Does Not Exist... Probably</h2>
  }
};

export default AnimalDetail;
