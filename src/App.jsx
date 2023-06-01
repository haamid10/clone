import React,{useState} from 'react'
import Search from './Components/Search'
import Card from './Components/Card'
import axios from 'axios'


const App = () => {

  const [data , setData]= useState([])
  const [input , setInput]= useState('')


  
  const api= (e) => {
    setInput(e.target.value)
  }

  const fetching = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then((res)=> {setData(res.data.meals)})
   }
   console.log(data)
  return (

    <div className='bg-blue-100 h-32 p-12'> 

      <Search fetching={fetching} handle={api}/>
      {data.map((item)=> <Card  recipe={item} /> )}
    </div>
  )
}

export default App
