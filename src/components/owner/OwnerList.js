import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerManager from '../../modules/OwnerManager';
import OwnerCard from './OwnerCard';

const OwnerList = () => {
  // The initial state is an empty array
  const [owners, setOwner] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return OwnerManager.getAll().then(ownersFromAPI => {
      setOwner(ownersFromAPI)
    });
  };

  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwner));
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {owners.map(owner => <OwnerCard key={owner.id} 
      owner={owner}
      deleteOwner={deleteOwner} />)}
    </div>
  );
};
export default OwnerList;