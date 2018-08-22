import React from "react";
import "./index.css";

const Movie = ({movie, btnValue, hanleClick}) => (
  <div className="Movie">
    <img className="Movie_poster" src={movie.img} alt={movie.title} />
    <p className="Movie_p"> ID: {movie.id} </p>
    <p className="Movie_p"> {movie.title} </p>
    <button className="Movie_btn" onClick={hanleClick}>
      {btnValue}
    </button>
  </div>
);

export default Movie;