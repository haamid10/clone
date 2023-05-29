import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
function App() {
 return (
  <div classNameName="App">
   <Header />
   <div className="main">
    <Search />
    <div className="movies-section">
     {/* <!-- one card --> */}
     <MovieCard />
     {/* <!-- one card --> */}
    </div>
   </div>
  </div>
 );
}

export default App;
