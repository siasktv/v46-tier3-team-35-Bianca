require('dotenv').config()
const express = require('express')
const connectToDB = require('./config/database')

const app = express()

// test route
app.get('/', function(req, res) {
    res.send('<h1>Hello, world!</h1>')
})

// listen at the designated port
const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}...`)
    connectToDB()
})

