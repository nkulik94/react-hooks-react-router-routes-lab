import React from "react";
import DirectorTile from "./DirectorTile";
import { directors } from "../data";

function Directors() {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => <DirectorTile director={director} key={director.name} />)}
    </div>
  )
}

export default Directors;
