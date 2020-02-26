import React, { useState } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerForm.css'

const OwnerForm = props => {
  const [owner, setOwner] = useState({ name: "", phone: "", image: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...owner };
    stateToChange[evt.target.id] = evt.target.value;
    setOwner(stateToChange);
  };

  const constructNewOwner = evt => {
    evt.preventDefault();
    if (owner.name === "" || owner.phone === "") {
      window.alert("Please input an owner name and phone");
    } else {
      setIsLoading(true);
      OwnerManager.post(owner)
        .then(() => props.history.push("/owners"));
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
              placeholder="Owner name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="phone"
              placeholder="Phone"
            />
            <label htmlFor="phone">Phone</label>
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
              onClick={constructNewOwner}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default OwnerForm