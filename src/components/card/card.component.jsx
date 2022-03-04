import React from "react";
import "./card.styles.css";

export const Card = props => (
  <div className="card-container">
    <img src={`https://robohash.org/${Math.round(props.content.id)}?set=set2&180x180`} alt="monster image" />
    <h2>{props.content.name}</h2>
    <p>{props.content.email}</p>
  </div>
)