const express = require('express');
const app = express()

app.use(express.json())

const userRoute= require('./Routes/userRoute')



app.use('/blog',  userRoute );

const port = 8080
app.listen(port , ()=> {
  console.log(`server is running on port ${port}`)
})

