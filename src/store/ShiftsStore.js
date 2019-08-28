import { observable, action } from 'mobx'

export class ShiftsStore {

    constructor() {
        this.copiedDay = ""
        this.numOfWantedShifts = 0
        this.arrOptions = []
        this.arrSubmittedShifts = null
    }

    @observable copiedDay
    @observable arrOptions
    @observable numOfWantedShifts

    @observable submittedShifts

    @action copyDay = (argDayNumber) => {
        this.copiedDay = this.arrOptions[argDayNumber]
    }

    @action onChangeSingleOption = (value, argSingleOption, i, dayNum) => {
        this.arrOptions[dayNum][argSingleOption] = value
    }

    @action makeDayOff = (argDayNum) => {
        this.arrOptions[argDayNum].Morning = false
        this.arrOptions[argDayNum].Evening = false
        this.arrOptions[argDayNum].Night = false
    }

    @action pasteDay = (argDayNumber) => {

        let tempArr = [...this.arrOptions]
        tempArr[argDayNumber].Morning = this.copiedDay.Morning
        tempArr[argDayNumber].Evening = this.copiedDay.Evening
        tempArr[argDayNumber].Night = this.copiedDay.Night

        this.arrOptions = [...tempArr]
    }

    @action submitShifts = () => {
        console.log(this.arrSubmittedShifts)
    }

    @action chooseUser = (user, shift, dayIndex) => {
        console.log(user)
        console.log(shift)
        console.log(dayIndex)

        console.log(this.arrSubmittedShifts)
        let tempArr = [...this.arrSubmittedShifts]

        this.tempArr[dayIndex][shift] = user
    }

    @action initSubmittedShifts = (length) => {
        if (this.arrSubmittedShifts) {
            this.arrSubmittedShifts = []
            for (let i = 0; i < length; i++)
                this.arrSubmittedShifts.push({})
        }

    }
}