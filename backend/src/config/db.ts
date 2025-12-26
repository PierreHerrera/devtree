import mongoose from 'mongoose'
import colors from 'colors'

export const connectDB = async () => {
    try {
        const {connection} = await mongoose.connect(process.env.MONGO_URI)
        const url = `${connection.host}:${connection.port}`
        console.log(colors.cyan.bold(`Mongo DB conectado en ${url}`))
        return 1
    } catch (error) {
        console.log(colors.bgRed.white.bold(error.message))
        process.exit(1)
    }
}

// MONGO_URI=mongodb+srv://pierre:fdgdfgdf345dsgf@cluster0.hup5ycn.mongodb.net/linktree_node_typescript
// # PORT=3000

// FRONTEND_URL=http://localhost:5173

// .env.local
// VITE_API_URL=http://localhost:4000