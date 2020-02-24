import React from "react";
import { tsPropertySignature } from "@babel/types";
import "./Employee.css"

const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="Employee" /> */}
        </picture>
        <h3>
          Name: <span className="card-locationname">{props.employee.name}</span>
        </h3>
        <p>Department: {props.employee.department}</p>
      </div>
      <button type="button" onClick={() => props.deleteEmployee(props.employee.id)}>You're Fired!</button>
    </div>
  );
};

export default EmployeeCard;