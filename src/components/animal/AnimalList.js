import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll("animals").then(animalsFromAPI => {
      setAnimals(animalsFromAPI);
    });
  };

  const deleteAnimal = id => {
    AnimalManager.delete(id).then(() =>
      AnimalManager.getAll().then(setAnimals)
    );
  };
  useEffect(() => {
    getAnimals();
  }, []);

  return (
    
      
      <div className="container-cards">
        <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit Animal
        </button>
      </section>
      {animals.map(animal => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={deleteAnimal}
        />
      ))}
    </div>
  );
};
export default AnimalList;
