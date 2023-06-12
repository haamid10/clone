const express = require('express');
const app = express()

app.use(express.json())

const todos = require('./todos');


// app.use((req,res,next(), => {
//   console.log('middleware')
//   next()
// })


app.get('/todos' ,(req,res)=> {

  res.status(200).json({messege: todos})

});

app.get('/todos/:id' ,(req,res)=> {

  const result = todos.find((item)=> item.id == req.params.id)

  res.status(200).json({messege: result})

});

app.post('/todos' ,(req,res)=> {
  const id = todos[todos.length=== 0] ? 1 : todos[todos.length-1].id+1;
  const newTodo = {
    id: id,
    task: req.body.task ,
    completed: req.body.completed
  }
  todos.push(newTodo)
  res.status(200).json({data: todos,messege:"added "})
});

app.put('/todos/:id' ,(req,res)=> {
  const updated = todos.findIndex((item)=> item.id == req.params.id)
  if(updated === -1){
    res.status(404).json({messege: 'todos not found'})
  }
  const editTodo=(todos[updated].task = req.body.task)
  res.status(200).json({messege: 'updated succesfuly'})
});


app.delete('/todos/:id' ,(req,res)=> {

  const deletev= todos.findIndex((item)=> item.id == req.params.id)
  if(deletev === -1){
    res.status(404).json({messege: 'todos not found'})
  }
const result = todos.splice(deletev,1)
  res.status(200).json({messege:  'deleted'})
});

const port = 8080
app.listen(port , ()=> {
  console.log(`server is running on port ${port}`)
})

