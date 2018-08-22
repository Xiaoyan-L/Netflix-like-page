import React from "react";
import Movie from "./Movie";
import "./index.css";

const MovieList = ({ movies, header, handleClick }) => (
  <div>
    <h1 className="MovieList_title">{header}</h1>
    <div  className="MovieList">
      {movies.map((movie, index) => (
        <Movie
          key={index}
          movie={movie}
          btnValue={header === "My List" ? "Remove" : "Add"}
          hanleClick={ () => handleClick(index, movie)}
        />
      ))}
    </div>
  </div>
);

export default MovieList;
