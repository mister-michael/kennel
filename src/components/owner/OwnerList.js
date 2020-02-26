import React, { useState, useEffect } from "react";
//import the components we will need
import OwnerManager from "../../modules/OwnerManager";
import OwnerCard from "./OwnerCard";

const OwnerList = props => {
  const [owners, setOwner] = useState([]);

  const getOwners = () => {
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwner(ownersFromAPI);
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id).then(() => OwnerManager.getAll().then(setOwner));
  };

  useEffect(() => {
    getOwners();
  }, []);

  return (
    <div className="container-cards">
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/owners/new");
          }}
        >
          New Owner
        </button>
      </section>
      {owners.map(owner => (
        <OwnerCard key={owner.id} owner={owner} deleteOwner={deleteOwner} />
      ))}
    </div>
  );
};
export default OwnerList;
