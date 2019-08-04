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

module.exports = router