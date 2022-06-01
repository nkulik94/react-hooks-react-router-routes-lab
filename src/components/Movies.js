import React from "react";
import MovieTile from "./MovieTile";
import { movies } from "../data";

function Movies() {
  return (<div>
    <h1>Movies Page</h1>
    {movies.map(movie => <MovieTile movie={movie} key={movie.title}/>)}
  </div>)
}

export default Movies;
