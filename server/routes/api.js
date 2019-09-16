const express = require('express')
const router = express.Router()
const DataDao = require("../utils/dataDao")
const EmailService = require("../utils/EmailService")
const LoginService = require("../utils/LoginService")

const dataDao = new DataDao()
const emailService = new EmailService()
const loginService = new LoginService()
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
    let result = await dataDao.getLastWeekRequest()
    res.send(result)
})
router.post('/weekrequest', async function (req, res) {
    let weekRequestObj = req.body
    await dataDao.saveWeekRequest(weekRequestObj)
    res.send()
})

router.post('/emailnotify', async function (req, res) {
    emailService.sendNotifications(req.body.emails, req.body.adminEmail, req.body.dates)

    // await dataDao.test()
    res.send()
})

router.get('/submitshifts', async function (req, res) {
    let options = await dataDao.getLastSubmittedShifts()
    res.send(options)
})

router.post('/login', async function (req, res) {
    let response = await dataDao.login(req.body)
    res.send(response)
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

router.get('/workschedule', async function (req, res) {
    let result = await dataDao.getWorkSchedule()
    res.send(result)
})

router.get('/rosters', async function(req,res) {
    let result = await dataDao.getAllRosters()
    res.send(result)
})

module.exports = router