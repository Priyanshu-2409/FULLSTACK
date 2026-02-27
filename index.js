import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import db from "./utils/db.js"


dotenv.config()
  
const app = express()
const port = process.env.PORT || 3000 

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json()) //to accept json format data from frontend
app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/', (req, res) => {
  res.send('Priyanshu!')
})

console.log(process.env.PORT)

//connect to db;
db();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
