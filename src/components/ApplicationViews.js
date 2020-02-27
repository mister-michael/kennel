import { Route, Redirect } from "react-router-dom";
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
import AnimalForm from "./animal/AnimalForm";
import LocationForm from "./location/LocationForm";
import OwnerForm from "./owner/OwnerForm";
import EmployeeForm from "./employee/EmployeeForm";
import Login from "./auth/Login.js";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeEditForm from "./employee/EmployeeEditForm";
import OwnerEditForm from "./owner/OwnerEditForm";
import LocationEditForm from "./location/LocationEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimal";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  return (
    <React.Fragment>
      <Route
        exact
        path="/login"
        render={props => {
          return <Login {...props} />;
        }}
      />
      ;
      <Route
        exact
        path="/"
        render={props => {
          if (isAuthenticated()) {
            return <Home />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <AnimalDetail
                animalId={parseInt(props.match.params.animalId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/new"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      {/* <Route
        path="/animals/:animalId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      /> */}
      {/* ANIMALS END */}
      {/* LOCATION START */}
      <Route
        exact
        path="/locations"
        render={props => {
          if (isAuthenticated()) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <LocationDetail
                locationId={parseInt(props.match.params.locationId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/new"
        render={props => {
          if (isAuthenticated()) {
            return <LocationForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      {/* LOCATIONS END */}
      {/* OWNERS START*/}
      <Route
        exact
        path="/owners"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <OwnerDetail
                ownerId={parseInt(props.match.params.ownerId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owners/new"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      {/* OWNERS END */}
      {/* EMPLOYEES START */}
      <Route
        exact
        path="/employees"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={props => {
          if (isAuthenticated()) {
            return (
              <EmployeeDetail
                employeeId={parseInt(props.match.params.employeeId)}
                {...props}
              />
            );
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/new"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={props => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/details"
        render={props => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
