import React from "react";
import { Link } from "react-router-dom";
import "./Employee.css";

const EmployeeCard = props => {
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
      <button
        type="button"
        onClick={() => props.deleteEmployee(props.employee.id)}
      >
        You're Fired!
      </button>
      <Link to={`/employees/${props.employee.id}`}>
        <button>Details</button>
      </Link>
      <button
        type="button"
        onClick={() =>
          props.history.push(`/employees/${props.employee.id}/edit`)
        }
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          props.history.push(
            `/employees/${props.employee.id}/details`
          );
        }}
      >
        Animals
      </button>
    </div>
  );
};

export default EmployeeCard;
