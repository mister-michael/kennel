import React, { useState, useEffect } from "react";
//import the components we will need
import EmployeeManager from "../../modules/EmployeeManager";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = (props) => {
  const [employees, setEmployee] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then(employeesFromAPI => {
      setEmployee(employeesFromAPI);
    });
  };

  const deleteEmployee = id => {
    EmployeeManager.delete(id).then(() =>
      EmployeeManager.getAll().then(setEmployee)
    );
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container-cards">
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/employees/new");
          }}
        >
          New Employee
        </button>
      </section>
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          deleteEmployee={deleteEmployee}
        />
      ))}
    </div>
  );
};
export default EmployeeList;
