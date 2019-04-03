import React from "react";
import { ActorList } from "../data/actors";

const Actors = props => {
  let actors = ActorList.map(person => {
    return (
      <div className="actor-container">
        <a>
          <div className="actor-image" />
        </a>
        <h3>{person.name}</h3>
      </div>
    );
  });

  return (
    <div className="main-content">
      <div className="container">{actors}</div>
    </div>
  );
};

export default Actors;
