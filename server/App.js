const express = require("express")
const server = require('./server')

const app = express()
app.use(express.json())

const userRoute = require("./Routes/userRoutes")


app.use('/user',userRoute)

const port = 8000;
app.listen(port, ()=> {
  console.log(`connected to port  of ${port}`)
})