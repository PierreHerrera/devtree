import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import router from './router'
import { connectDB } from './config/db'
import { corsConfig } from './config/cors'
const app = express()

connectDB()

// Leer datos del formulario
app.use(express.json())

// Cors
app.use(cors(corsConfig))

app.use('/', router)


export default app