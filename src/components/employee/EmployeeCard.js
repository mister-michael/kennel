import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="Employee" /> */}
        </picture>
        <h3>
          Name: <span className="card-locationname">Employee Name</span>
        </h3>
        <p>Department</p>
      </div>
    </div>
  );
};

export default EmployeeCard;