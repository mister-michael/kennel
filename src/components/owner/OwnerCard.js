import React from "react";

const OwnerCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={require("./dog.svg")} alt="My Dog" /> */}
        </picture>
        <h3>
          Name: <span className="card-ownername">Doodles</span>
        </h3>
        <p>Owner Of:</p>
      </div>
    </div>
  );
};

export default OwnerCard;