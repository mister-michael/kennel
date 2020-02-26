import React, { useState } from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeForm.css'

const EmployeeForm = props => {
  const [employee, setEmployee] = useState({ name: "", cohort: "", department: ""});
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const constructNewEmployee = evt => {
    evt.preventDefault();
    if (employee.name === "" || employee.cohort === "" || employee.department === "") {
      window.alert("Please input employee information");
    } else {
      setIsLoading(true);
      EmployeeManager.post(employee)
        .then(() => props.history.push("/employees"));
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="name"
              placeholder="Employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="cohort"
              placeholder="Cohort"
            />
            <label htmlFor="cohort">Cohort #</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="department"
              placeholder="Department"
            />
            <label htmlFor="department">Department</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm