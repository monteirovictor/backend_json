const express = require('express')
const userRoute = require('./routes/userRoute')

const app = express()
const port = 3000

userRoute(app)

app.get('/',(req,res)=> res.send('Olá mundo express'))

app.listen(port,() => console.log('rodando na porta 3000'))