import {useState} from 'react'

const Form = () => {
  
  const [ todo , setTodo] = useState([])
  const [ todoText , setTodoText] = useState('')
  // const [ completed , setCompleted] = useState(false)


  const handle = () => {
    const todos= {
      id: todo.length=== 0? 1:todo[todo.length - 1].id + 1,
      completed: false,
      task: todoText

    }
    const newG = [...todo,todos]
    setTodo(newG)
  }

  const handleOnComplete = (ib) => {
    const complete = todo.map((value)=> {
      if(value.id === ib) {
        return{...value, completed: !value.completed}
    } else{
      // console.log(value.completed)
      return value
    }
  })
  setTodo(complete)
  
}

    const handleDelete = (id) => {
      const deleted = todo.filter((value,index)=> {
        return value !== id
      })
      setTodo(deleted)
  
    }
    return (
      <div className='bg-green-50 h-screen'>
        <div className=' p-12 bg-teal-100'>
          <h1 className='text-black text-center text-4xl font-bold'>Todo List</h1>
        </div>
        <div className=' mt-12'>
        <input className=' p-2 rounded bg-blue-200' type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText}  />
        <button className='bg-teal-400 px-3 py-1 capitalize rounded-md ml-12' onClick={handle}>add Todo</button>
        </div>
        
  
        {todo.map((item)=> {
          return (
            <li className='flex items-center justify-center gap-12 mt-12'>
              <p className={item.completed ? "line-through" : "font-bold mr-12 capitalize"}>{item.id} {item.task}</p>
              <div>
              <button className=' bg-green-400 mr-4 rounded px-2 text-white' onClick={()=> handleOnComplete(item.id) }>Complete </button>
              <button className=' bg-red-400 mr-4 rounded px-2 text-white' onClick={()=>handleDelete(item)}>Delete</button>
              </div>
             
            </li>
          )
        })}
        
      </div>
    )}

export default Form
