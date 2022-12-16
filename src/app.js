const express =require('express')
const app= express()
const see = require('./controller/controller.js')
const router = require('./routes/routes')
const cors = require('cors')
const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config();
const bodyParser =require('body-parser')
const port =process.env.PORT

app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/',router)

app.listen(port,()=>{
    console.log(`App is ON on ${port}`)
})