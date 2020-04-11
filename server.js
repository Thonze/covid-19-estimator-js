const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const defaultroute = require('./router/defaultroute')

const app = express()

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/estimator', defaultroute)

app.listen(8070, (req,res) => {
     console.log('server is runing')
})