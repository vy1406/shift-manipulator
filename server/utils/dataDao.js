const workers = require('./workers.json')
const options = require('./options.json')
const users = require('./users.json')

const Worker = require("../models/Worker")
const Options = require("../models/Options")
const User = require("../models/User")

const UserShiftRequest = require("../models/UserShiftRequest")
const lastWeekRequest = require('./weekrequest.json')

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

    async getLastOptions() {
        // ToDo
        // ---------------------------------
        // sort by date, return the last one.
        // ---------------------------------
        let result = options
        return result
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
        })

        userToSave.save()
    }

    async getLastWeekRequest() {
        const weekRequest =  lastWeekRequest
        return weekRequest
    }

    async getShiftRequests() {
        let result = await UserShiftRequest.find()
        return result
    }

    async saveUserOptions(argSubmittedShifts) {

        let shiftRequestToSave = new UserShiftRequest({
            user : argSubmittedShifts.user,
            arrOptions : argSubmittedShifts.arrOptions,
            numOfWantedShifts: argSubmittedShifts.numOfWantedShifts,
            date : argSubmittedShifts.date
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
        const { email, password } = bodyParams
        let worker = await Worker.find({ email })

        if (worker.length === 0)
            return "Worker with given email doenst exist."
        else if (worker[0].password !== password)
            return "Wrong password!"
        else
            return worker
    }
}

module.exports = dataDao