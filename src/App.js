import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";
import axios from "axios";
function App() {
  const [result, setResult] = useState([])
  const [input, setInput] = useState("")


  const searchF = (value) => {
    setInput(value.target.value)
  }
  const  fetching = async () => {
   await  axios.get(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then((res) => { 
      setResult(res.data) 
      console.log(res.data)
    
    
    })
  }

    // console.log(result)
  // if(!result){
  //   console.log('math is not mathing')
  // }
 return (
  <>
  <div classNameName="App">
   <Header />
   <div className="main">
    <Search fetching={fetching}  search={searchF}/>
    <div className="movies-section">
     {result.map((movie) => <MovieCard key={movie.id} movie={movie.show} />)}
    </div>
   </div>
  </div> 
  </>
 
 );
}

export default App;
