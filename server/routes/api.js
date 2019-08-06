const express = require('express')
const router = express.Router()
const DataDao = require("../utils/dataDao")
const dataDao = new DataDao()  

router.get('/sanity', function (req, res) {
    res.send("OK!")
})

router.get('/populate', function (req, res) {
    dataDao.populate()
    res.send("populated")
})

router.get('/cleardb', function (req, res) {
    dataDao.clearDB()
    res.send("db cleared")
})

router.post('/login', async function (req, res) {
    let msg = await dataDao.login(req.body)
    console.log(msg)
    // res.send(msg)
})

module.exports = router