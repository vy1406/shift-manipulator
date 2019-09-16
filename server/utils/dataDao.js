const workers = require('./workers.json')
const options = require('./options.json')
const users = require('./users.json')
const lastWeekRequest = require('./weekrequest.json')
const bcrypt = require('bcrypt');

let saltRaunds = 10
const Worker = require("../models/Worker")
const Options = require("../models/Options")
const User = require("../models/User")
const SubmittedShifts = require("../models/SubmittedShifts")
const UserShiftRequest = require("../models/UserShiftRequest")
const WeekRequest = require("../models/WeekRequest")

class dataDao {

    async clearDB() {

        Worker.collection.drop()
        Options.collection.drop()
        User.collection.drop()
        UserShiftRequest.collection.drop()

        console.log("db dropped.")
    }

    async populate() {

        for (let i = 0; i < workers.length; i++)
            await this.saveWorkerToDB(workers[i])

        for (let i = 0; i < options.length; i++)
            await this.saveOptionToDB(options[i])

        for (let i = 0; i < users.length; i++)
            await this.saveUserToDB(users[i])

        console.log("populated")
    }

    async saveWorkerToDB(argWorker) {

        let workerToSave = new Worker({
            name: argWorker.name,
            lastname: argWorker.lastname,
            password: argWorker.password,
            email: argWorker.email,
            isAdmin: argWorker.isAdmin
        })

        workerToSave.save()
    }

    // for population ( testing )
    async saveOptionToDB(argOptions) {

        let optionsToSave = new Options({
            name: argOptions.name,
            work_id: argOptions.work_id,
            available: argOptions.available,
            options: argOptions.options
        })

        optionsToSave.save()
    }

    async saveUserToDB(argUser) {

        let userToSave = new User({
            name: argUser.name,
            email: argUser.email,
            user: argUser.user,
            password: argUser.password,
            lastName: argUser.lastName,
            isAdmin: argUser.isAdmin
        })

        userToSave.save()
    }

    async getLastWeekRequest() {

        const latest = await WeekRequest.findOne().sort({ dateId: -1 }).limit(1)
        return latest
    }

    async getShiftRequests() {

        let result = await UserShiftRequest.find()
        return result
    }

    async saveUserOptions(argSubmittedShifts) {

        let shiftRequestToSave = new UserShiftRequest({
            user: argSubmittedShifts.user,
            arrOptions: argSubmittedShifts.arrOptions,
            numOfWantedShifts: argSubmittedShifts.numOfWantedShifts,
            date: argSubmittedShifts.date
        })

        console.log("shift request saved ")
        console.log(shiftRequestToSave)

        shiftRequestToSave.save()
    }

    async getUsers() {
        let result = await User.find()
        return result
    }

    async login(bodyParams) {

        const { user, password } = bodyParams
        let db_user = await User.find({ user })

        let response = { user: null, error: null, isUserFound: null, isWrongPassword: null }

        if (db_user.length === 0) { // user wasnt found
            response.error = "Worker with given email doenst exist."
            response.isUserFound = false
        } else {     // user found 
            if (await bcrypt.compare(password, db_user[0].password)) { // password match
                response.user = {
                    email: db_user[0].email,
                    user: db_user[0].user,
                    isAdmin: db_user[0].isAdmin,
                    name: db_user[0].name,
                    lastName: db_user[0].lastName
                }
                response.isUserFound = true
            }
            else { // wrong password
                response.error = "Wrong password!"
                response.isUserFound = true
                response.isWrongPassword = true
            }
        }
        return response
    }

    async saveWeekRequest(argWeekRequestObj) {

        let weekRequestObjToSave = new WeekRequest({
            dateId: new Date(),
            dateFrom: argWeekRequestObj.dateFrom,
            dateTo: argWeekRequestObj.dateTo,
            numOfShiftsRequested: argWeekRequestObj.numOfShiftsRequested,
            arrOptions: argWeekRequestObj.arrOptions
        })

        console.log("requested week saved ")
        console.log(weekRequestObjToSave)

        weekRequestObjToSave.save()
    }

    async saveRoaster(argSubmittedShifts) {

        let submittedShiftsToSave = new SubmittedShifts({
            shifts: argSubmittedShifts.shifts,
            date: argSubmittedShifts.date
        })

        console.log("submitted shifts saved ")
        console.log(submittedShiftsToSave)

        submittedShiftsToSave.save()
    }

    async getLastSubmittedShifts() {

        let result = await SubmittedShifts.find()
        return result
    }

    async getWorkSchedule() {

        let result = await SubmittedShifts.find()
        return result
    }

    async getAllRosters() {
        let result = await SubmittedShifts.find()
        return result
    }

    async test() {
        User.findByIdAndUpdate('5d6e9689bc53263ebce3d3b5',
            { email: 'smtp.mailtrap.io' },
            function (err, user) {
                if (err) throw err;

                console.log(user);
            });
    }
}

module.exports = dataDao