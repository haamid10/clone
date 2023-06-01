import React,{useState} from 'react'

const Search = ({handle, fetching}) => {
  // const [search,setSearch] = useState([])

  

  // console.log(search)
  return (
    <div className=' flex items-center justify-center gap-12 '>
      <input className=" h-12 text-black rounded-xl px-12 " type="text" placeholder="Search" onChange={ handle}   />
      <button className=" bg-blue-600 p-2 w-24 rounded-xl text-white"  onClick={ fetching}  >Search</button>
    </div>
  )
}

export default Search
