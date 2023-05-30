import {useState} from 'react'

function Search({search}) {
  const [input , setInput] = useState()
 
  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
        <input className="search-box" type="text" placeholder="Search" onChange={(e)=> setInput(e.target.value)}   />
        <button className="btn-search"  onClick={()=> search(input)}  >Search</button>
      </div>
    </div>
  );
}

export default Search;
