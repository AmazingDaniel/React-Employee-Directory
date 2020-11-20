import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
        <h3>{props.firstName} {props.lastName}</h3>
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name} {props.lastName}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Department:</strong> {props.location}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
