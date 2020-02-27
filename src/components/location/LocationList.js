import React, { useState, useEffect } from "react";
//import the components we will need
import LocationCard from "./LocationCard";
import LocationManager from "../../modules/LocationManager";

const LocationList = props => {

  const [locations, setLocation] = useState([]);

  const getLocations = () => {

    return LocationManager.getAll().then(locationsFromAPI => {
      setLocation(locationsFromAPI);
    });
  };

  const deleteLocation = id => {
    LocationManager.delete(id).then(() =>
      LocationManager.getAll().then(setLocation)
    );
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="container-cards">
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/locations/new");
          }}
        >
          Add Location
        </button>
      </section>
      {locations.map(location => (
        <LocationCard
          key={location.id}
          locationObject={location}
          deleteLocation={deleteLocation}
          {...props}
        />
      ))}
    </div>
  );
};
export default LocationList;
