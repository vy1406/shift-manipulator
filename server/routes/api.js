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

router.get('/options', async function (req, res) {
    let options = await dataDao.getLastOptions()
    res.send(options)
})

router.get('/weekrequest', async function (req, res) {
    let options = await dataDao.getLastWeekRequest()
    res.send(options)
})

router.post('/login', async function (req, res) {
    let worker = await dataDao.login(req.body)
    res.send(worker)
})

module.exports = router