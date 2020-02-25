import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = props => {
  const [employee, setEmployee] = useState({ name: "", cohort: "", department: "" });

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then(employee => {
      setEmployee({
        name: employee.name,
        cohort: employee.cohort,
        department: employee.department
      });
    });
  }, [props.employeeId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>{/* <img src={`${employee.image}`} /> */}</picture>
        <h3>
          Name: <span style={{ color: "darkslategrey" }}>{employee.name}</span>
        </h3>
        <p>Cohort: {employee.cohort}</p>
        <p>Department: {employee.department}</p>
      </div>
    </div>
  );
};

export default EmployeeDetail;
