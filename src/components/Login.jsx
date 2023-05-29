import {useState} from 'react'

const Login = () => {

  const [todo , setTodo] = useState([])
  const [todoText, setTodoText] =useState('')

  const handle = () => {
    const todos = {
     id: todo.length === 0 ? 1 : todo[todo.length - 1].id +1,
     completed: false,
     task: todoText  
    }
    const newformula = [...todo,todos]
     setTodo(newformula)
  }
  const handleOnComplete = (ib) => {
    const checker = todo.map((value) => {
      if (value.id === ib) {
        return {...value, completed : !value.completed}
      }else{
        return value
      }
    })
    setTodo(checker)
  }
  return (
       <div className='bg-yellow-100 h-screen'>
        <div className=' p-12 bg-indigo-500'>
          <h1 className='text-black text-center text-4xl font-bold'>user List </h1>
        </div>
        <div className=' mt-12'>
        <input className=' p-2 rounded bg-blue-200' type="text" onChange={(e) => setTodoText(e.target.value)} value={todoText}  />
        <button className='bg-indigo-400 px-3 py-1 capitalize rounded-md ml-12' onClick={handle}>add User</button>
        </div>
        
  
        {todo.map((item)=> {
          return (
            <li className='flex items-center justify-center gap-12 mt-12'>
              <p className=''>{item.id} {item.task}</p>
              {item.completed  ? <h1>Online</h1>  :  <h1>oFline</h1>}
              <div>
              <button className=' bg-red-600 mr-4 rounded px-2 text-white' onClick={()=> handleOnComplete(item.id) }>check status </button>
           
              </div>
             
            </li>
          )
        })}
        
      </div>
    
      
 
  )
}

export default Login
