import React from "react";
import ActorTile from "./ActorTile";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => <ActorTile actor={actor} key={actor.name}/>)}
    </div>
  )
}

export default Actors;
