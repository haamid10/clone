import React from 'react'

const Card = ({recipe}) => {
  return (
    <div className=' flex flex-row items-center justify-center'>
       
      <img className=' w-[20rem] h-auto rounded-xl mr-12  mt-12' src={recipe.strMealThumb} alt="" />
     
      <div className='bg-blue-50 p-3 rounded-xl mt-12 '>
      <h2 className=' font-bold text-xl'>{recipe.strMeal}</h2>
      <h2 className='font-semibold text-md'>{recipe.strIngredient4}</h2>
      <h2 className=' text-sm'>{recipe.strInstructions}</h2>
      </div>
     
      
    </div>
  )
}

export default Card
