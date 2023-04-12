import express from 'express';
import userRouter from './routes/user.routes';
import cryptosRouter from "./routes/cryptos.routes";
import crypto_userRouter from "./routes/crypto_user.routes"

const app = express()
const cors = require('cors')
const PORT = 8532
const whiteList = ['http://localhost:4200']

app.use(express.json())
app.use(cors({origin: whiteList}))


app.get('/ping', (_req, res)=>{
    console.log('Has hecho ping')
    const MESSAGE: string ='Pong'
    res.send(MESSAGE)
});

app.use('/api/users', userRouter)
app.use('/api/cryptos',cryptosRouter );
app.use('/api/crypto_user', crypto_userRouter);

app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})


