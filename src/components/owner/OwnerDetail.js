import React, { useState, useEffect } from 'react';
import OwnerManager from '../../modules/OwnerManager';
import './OwnerDetail.css'

const OwnerDetail = props => {
  const [owner, setOwner] = useState({ name: "", breed: "" });

  useEffect(() => {
    OwnerManager.get(props.ownerId)
      .then(owner => {
        setOwner({
          name: owner.name,
          phone: owner.phone
        });
      });
  }, [props.ownerId]);

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          {/* <img src={`${owner.image}`} /> */}
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{owner.name}</span></h3>
        <p>Phone: {owner.phone}</p>
      </div>
    </div>
  );
}

export default OwnerDetail;