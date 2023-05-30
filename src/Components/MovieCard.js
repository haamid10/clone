import { useState } from "react";
import "../index.css";
function MovieCard({movie}) {
  // const [ movie, setMovie] = useState(search)

  console.log(movie)
 return (
  <div className="movie-card">
   <div className="movie-image">
    <img
     src={movie.image.medium}
     alt={movie.name}
    />
   </div>

   <h3 className="movie-heading">{movie.name}</h3>
   <ul className="list">
    <li>{movie.genres[0]}</li>
    <li>{movie.genres[1]}</li>
    <li></li>
   </ul>
   <a href={movie.officialSite}>Watch now</a>
  </div>
 );
}

export default MovieCard;
