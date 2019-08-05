const workers = require('./workers.json')
const options = require('./options.json')
const Worker = require("../models/Worker")
const Options = require("../models/Options")

class dataDao {

    async clearDB() {
        Worker.collection.drop()
        Options.collection.drop()
        console.log("db dropped.")
    }

    async populate() {
        for (let i = 0; i < workers.length; i++)
            await this.saveWorkerToDB(workers[i])

        for (let i = 0; i < options.length; i++)
            await this.saveOptionToDB(options[i])

        console.log("populated")
    }

    async saveWorkerToDB(argWorker) {

        let workerToSave = new Worker({
            name: argWorker.name,
            lastname: argWorker.lastname,
            password: argWorker.password,
            email : argWorker.email,
            isAdmin: argWorker.isAdmin
        })

        workerToSave.save()
    }

    async saveOptionToDB(argOptions) {

        let optionsToSave = new Options({
            name: argOptions.name,
            work_id: argOptions.work_id,
            available: argOptions.available,
            options: argOptions.options
        })

        optionsToSave.save()
    }
}

module.exports = dataDao