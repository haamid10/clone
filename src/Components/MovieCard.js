import "../index.css";
function MovieCard() {
 return (
  <div className="movie-card">
   <div className="movie-image">
    <img
     src="https://i.pinimg.com/originals/a2/34/75/a234753b69e3bd27b7f1d448956c38af.jpg"
     alt="movie"
    />
   </div>

   <h3 className="movie-heading">Breaking Bad</h3>
   <ul className="list">
    <li>Drama</li>
    <li>Romace</li>
   </ul>
   <button>Watch Now</button>
  </div>
 );
}

export default MovieCard;
