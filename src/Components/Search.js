// import {useState} from 'react'

function Search({search, fetching}) {
 
  return (
    <div className="search-section">
      Search for your favorite shows
      <div classNameName="search-input">
      <input className="search-box" type="text" placeholder="Search" onChange={search}   />
        <button className="btn-search"  onClick={fetching}  >Search</button>
      </div>
    </div>
  );
}

export default Search;
