import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from './config/Mongodb.js'
import authRouter from './Routes/authRoutes.js'


const app = express() 
const port = process.env.PORT || 4000

connectDB();

app.use(express.json());
app.use(cookieParser())
app.use(cors({credentials: true})) // to send cookies as res 


//API endpoints
app.get('/',(req,res) => res.send("API  Working"))
app.use('/api/auth',authRouter)


app.listen(port,()=>console.log(`Server started on PORT : ${port}`))