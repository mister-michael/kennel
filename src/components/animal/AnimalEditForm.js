import React, { useState, useEffect } from "react";
import AnimalManager from "../../modules/AnimalManager";
import "./AnimalForm.css";
import EmployeeManager from "../../modules/EmployeeManager";

const AnimalEditForm = props => {
  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    image: "",
    employeeId: ""
  });

  const [isLoading, setIsLoading] = useState(true);

  const [employees, setEmployees] = useState([]);

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  const updateExistingAnimal = evt => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: props.match.params.animalId,
      name: animal.name,
      breed: animal.breed,
      image: animal.image,
      employeeId: animal.employeeId
    };

    AnimalManager.update(editedAnimal).then(() =>
      props.history.push("/animals")
    );
  };

  useEffect(() => {
    setTimeout(() => {
      AnimalManager.get(props.match.params.animalId)
        .then(animal => setAnimal(animal))
        .then(() => EmployeeManager.getAll())
        .then(employee => {
          setEmployees(employee);
          setIsLoading(false);
        });
    }, 1000);
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />
            <label htmlFor="name">Animal name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
            <label htmlFor="breed">Breed</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="image"
              value={animal.image}
            />
            <label htmlFor="breed">Breed</label>

            <select
              className="form-control"
              id="employeeId"
              value={animal.employeeId}
              onChange={handleFieldChange}
            >
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default AnimalEditForm;
