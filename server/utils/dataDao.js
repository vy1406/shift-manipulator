const workers = require('./workers.json')
const Worker = require("../models/Worker")
class dataDao {

    async clearDB() {
        Worker.collection.drop()
        console.log("db dropped.")
    }

    async populate() {
        for (let i = 0; i < workers.length; i++)
            await this.saveWorkerToDB(workers[i])

        console.log("populated")
    }

    async saveWorkerToDB(argWorker) {

        let workerToSave = new Worker({
            name: argWorker.name,
            lastname: argWorker.lastname,
            isAdmin: argWorker.isAdmin
        })

        workerToSave.save()
    }
    
}

module.exports = dataDao