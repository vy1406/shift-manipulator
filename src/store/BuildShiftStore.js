import { observable, action } from 'mobx'

export class BuildShiftStore {

    constructor() {
        this.arrSubmittedShifts = null
        this.arrShifts = []
        this.arrShiftSketch = []
        this.isReady = false // for loader
    }

    @observable submittedShifts
    @observable arrUsers
    @observable arrShiftSketch
    @observable isReady

    @action initBuildStore = (length, listOfOptions, arrUsers, arrShifts) => {
        this.initSubmittedShifts(length, listOfOptions)
        this.arrShifts = arrShifts
        this.initUsers(arrUsers)
    }

    @action submitShifts = () => {
        console.log(this.arrSubmittedShifts)
        console.log(this.arrUsers)
    }

    @action chooseUser = (user, shift, dayIndex) => {
        this.arrSubmittedShifts[dayIndex][shift] = user
        console.log(this.arrUsers)
    }

    @action initUsers = (users,) => {
        this.arrUsers = []
        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < this.arrShifts.length; j++) {
                if (users[j].user === this.arrShifts[i].user)
                    this.arrUsers.push({
                        user: this.arrShifts[j].user,
                        fullName: users[i].name.split("")[0] + "." + users[i].lastName,
                        numOfWantedShifts: this.arrShifts[i].numOfWantedShifts,
                        numOfCurrentShifts: 0
                    })
            }
        }
    }

    @action initSubmittedShifts = (length, listOfOptions) => {
        if (this.arrSubmittedShifts == null) {
            this.arrSubmittedShifts = []
            for (let i = 0; i < length; i++) {
                let optionsModel = {}
                listOfOptions.forEach(opt => optionsModel[opt] = null)
                this.arrSubmittedShifts.push(optionsModel)
            }
        }
    }
}