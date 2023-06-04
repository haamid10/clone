// import { useState } from "react";
import "../index.css";
function MovieCard({movie}) {
  // const [ movie, setMovie] = useState(search)

  console.log()
 return (
  <div className="movie-card">
   <div className="movie-image">
   <h3 className=" text-white text-3xl">{movie.name} </h3>

     {/* <img
     src={movie?.show.image.medium}
     alt=""
    />  */}
    <h1>{movie.name}</h1>
    {/* <img src={movie.image.medium} alt={movie.name} /> */}
    <h2>{movie.language}</h2>
   </div>
    
  
   <a href={movie.officialSite}>Watch now</a>
  </div>
 );
}

export default MovieCard;
