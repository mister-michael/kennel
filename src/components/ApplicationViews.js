import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import OwnerDetail from "./owner/OwnerDetail";
import LocationDetail from "./location/LocationDetail";

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
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={props => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />

      <Route
        path="/employees/:employeeId(\d+)"
        render={props => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)"
        render={props => {
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={props => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
