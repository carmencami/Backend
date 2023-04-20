import express from 'express';
import userRouter from './routes/user.routes';
import cryptosRouter from "./routes/cryptos.routes";
import crypto_userRouter from "./routes/crypto_user.routes";
import cors from 'cors'
import dot from 'dotenv'

const allowedOrigins = ['http://localhost:4200']

const options: cors.CorsOptions = {
    origin: allowedOrigins,
    credentials: true
}

const app = express();
const PORT = 8532

app.use(cors(options))

app.use(express.json())

dot.config();


app.use('/api/users', userRouter)

app.use('/api/cryptos', cryptosRouter)

app.use('/api/cryptos_user', crypto_userRouter)

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})