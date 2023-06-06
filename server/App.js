const express = require('express')

const app = express()

// app.use((req,res,next(), => {
//   console.log('middleware')
//   next()
// })

app.use(express.json())

app.get('/' ,(req,res)=> {
  res.status(200).json({messege: 'added'})
});

app.post('/' ,(req,res)=> {
  res.status(200).json({data: req.body,messege:"added "})
});

app.put('/' ,(req,res)=> {
  res.status(200).json({messege: 'update'})
});

app.delete('/' ,(req,res)=> {
  res.status(200).json({messege: 'delete'})
});

const port = 8000
app.listen(port , ()=> {
  console.log(`server is running on port ${port}`)
})

