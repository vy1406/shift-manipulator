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

router.post('/user', async function (req, res) {
    await dataDao.saveUserToDB(req.body)
    res.send()
})

router.get('/users', async function (req, res) {
    let users = await dataDao.getUsers()
    res.send(users)
})

router.get('/shiftrequests', async function (req, res) {
    let result = await dataDao.getShiftRequests()
    res.send(result)
})

router.get('/weekrequest', async function (req, res) {
    let options = await dataDao.getLastWeekRequest()
    res.send(options)
})
router.get('/submitshifts', async function (req, res) {
    let options = await dataDao.getLastSubmittedShifts()
    res.send(options)
})

router.post('/login', async function (req, res) {
    let user = await dataDao.login(req.body)
    console.log(user)
    res.send(user)
})

router.post('/submitshifts', async function (req, res) {

    let submittedShifts = {}
    submittedShifts.arrOptions = req.body.arrOptions
    submittedShifts.numOfWantedShifts = req.body.numOfWantedShifts
    submittedShifts.user = req.body.user
    submittedShifts.date = new Date()

    await dataDao.saveUserOptions(submittedShifts)
    res.send()
})

router.post('/submitroster', async function (req, res) {

    let submittedShifts = {}
    submittedShifts.shifts = req.body
    submittedShifts.date = new Date()

    await dataDao.saveRoaster(submittedShifts)
    res.send()
})

router.get('/workschedule', async function(req,res) {
    let result = await dataDao.getWorkSchedule()
    res.send(result)
})

module.exports = router