const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000 || process.env
const UserRoute = require('./routes/Route')
const cors = require('cors');
require('dotenv').config()


app.use(express.json());
app.use('/',UserRoute)
app.use(cors());

mongoose.connect(process.env.db_connect, {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

},()=>{
    console.log("Connection successfull")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})