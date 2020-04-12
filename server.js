const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const defaultroute = require('./router/defaultroute')

const app = express()

// Configuring body parser middleware
app.use(bodyParser.json());

app.use(cors());

app.use('/estimator', defaultroute)

// CONFIGURING CORS
app.use((req,res,next) =>{
     res.setHeader('Access-Control-Access-Origin', '*')
     res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH')
     res.setHeader('Access-Control-Allow-Headers','Content-Type, Authorization')
     next();
 })

app.listen(8070, (req,res) => {
     console.log('server is runing')
})