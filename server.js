const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTION_STRING || 'mongodb://localhost/shifts', { useNewUrlParser: true })

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, "node_modules")))

app.use('/', api)

const port = 8080

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || port, function(){
    console.log(`Server running on port ${port}`)
})

