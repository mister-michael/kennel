import React, { useState, useEffect } from 'react';
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'

const LocationDetail = props => {
  const [location, setLocation] = useState({ location: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    //get(id) from locationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          location: location.location,
          address: location.address
        });
        setIsLoading(false);
      });
  }, [props.locationId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={`${location.image}`} /> */}
        </picture>
        <h3>Location: <span style={{ color: 'darkslategrey' }}>{location.location}</span></h3>
        <p>Address: {location.address}</p>
        <button type="button" disabled={isLoading} onClick={() => handleDelete(location.id)}>
        Discharge
      </button>
      </div>
    </div>
  );
}

export default LocationDetail;