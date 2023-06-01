// import { useState } from "react";
import "../index.css";
function MovieCard({movies}) {
  // const [ movie, setMovie] = useState(search)

  console.log(movies)
 return (
  <div className="movie-card">
   <div className="movie-image">
   <h3 className=" text-white text-3xl">{movies.name} faarx</h3>

    {/* <img
     src={movie.image}
     alt={movie.name}
    /> */}
    {movies.name}
    {/* <img src={movie.image.medium} alt={movie.name} /> */}
    <h2>{movies.language}</h2>
   </div>
    
  
   <a href={movies.officialSite}>Watch now</a>
  </div>
 );
}

export default MovieCard;
