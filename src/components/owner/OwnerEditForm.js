import React, { useState, useEffect } from "react"
import "./OwnerForm.css"
import OwnerManager from "../../modules/OwnerManager";

const OwnerEditForm = props => {
  const [owner, setOwner] = useState({ name: "", phone: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const updateExistingOwner = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedOwner = {
      id: props.match.params.ownerId,
      name: owner.name,
      phone: owner.phone
    };

    OwnerManager.update(editedOwner)
      .then(() => props.history.push("/owners"))
  }

  useEffect(() => {
    OwnerManager.get(props.match.params.ownerId)
      .then(owner => {
        setOwner(owner);
        setIsLoading(false);
      });
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
              value={owner.name}
            />
            <label htmlFor="name">Name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phone"
              value={owner.phone}
            />
            <label htmlFor="phone">Phone</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingOwner}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default OwnerEditForm