const mongoose= require("mongoose")
const dotenv= require('dotenv')

console.log(process.env.MONGO)


//connect to MongoDB database using Mongoose ORM. Here we are connecting with local host and
mongoose.connect(`mongodb+srv://hameed:test123@mernclass.miibvmd.mongodb.net/?retryWrites=true&w=majority`).then(()=> {
  console.log("connected to the successfully")
}).catch((err) => (console.log( `something is wrong ${err}`)))