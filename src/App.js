import Header from "./Components/Header";
import Search from "./Components/Search";
import MovieCard from "./Components/MovieCard";
import { useState } from "react";
function App() {
  const [result, setResult] = useState([])
  const [input, setInput] = useState([])


  const searchF = (value) => {
    setInput(value)
  }

   fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
   .then((response) =>{
    return response.json()
  }).then((data) => {
    const result = data.map(item => item.show)
    setResult(result)
   
  })
  .catch((error)=> {console.log(error.message)
  })

   // eslint-disable-next-line no-undef
  
   if(!result){
    return <div>Loading................</div>
   }


  // console.log(result)
  
 return (
  <>
  {!result ? <h1>Loading....</h1> : <div classNameName="App">
   <Header />
   <div className="main">
    <Search  search={searchF}/>
    <div className="movies-section">
     {/* <!-- one card --> */}
     {result.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
     {/* <MovieCard  search={searchF}/> */}
     {/* <!-- one card --> */}
    </div>
   </div>
  </div> }
  </>
 
 );
}

export default App;
