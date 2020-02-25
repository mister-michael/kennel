import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
// import LocationCard from "./location/LocationCard";
// import EmployeeCard from "./employee/EmployeeCard";
// import OwnerCard from "./owner/OwnerCard;"
//ABOVE were these dynamicaly created, i don't recall making them

//only include these once they are built - previous practice exercise
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
          );
        }}
      />
      <Route
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      {/* Make sure you add the `exact` attribute here */}

      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          // Pass the animalId to the AnimalDetailComponent
          return (
            <AnimalDetail animalId={parseInt(props.match.params.animalId)} />
          );
        }}
      />

      {/*
  This is a new route to handle a URL with the following pattern:
  http://localhost:3000/animals/1

  It will not handle the following URL because the `(\d+)`
  matches only numbers after the final slash in the URL
  http://localhost:3000/animals/jack
*/}
    </React.Fragment>
  );
};

export default ApplicationViews;
