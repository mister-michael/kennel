import React, { useState } from 'react';
import AnimalManager from '../../modules/AnimalManager';
import './AnimalForm.css'

const AnimalForm = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "", image: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const constructNewAnimal = evt => {
    evt.preventDefault();
    if (animal.Name === "" || animal.breed === "") {
      window.alert("Please input an animal name and breed");
    } else {
      setIsLoading(true);
      AnimalManager.post(animal)
        .then(() => props.history.push("/animals"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Animal name"
            />
            <label htmlFor="animalName">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="breed"
              placeholder="Breed"
            />
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="image"
              placeholder="Image"
            />
            <label htmlFor="image">Image Url</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewAnimal}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalForm