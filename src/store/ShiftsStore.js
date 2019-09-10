import { observable, action } from 'mobx'

export class ShiftsStore {

    constructor() {
        this.copiedDay = ""
        this.numOfWantedShifts = 0
        // this.arrOptions = []
        this.weekRequestObj = {
            arrOptions : [],
            dateFrom : Date,
            dateTo : Date
        }
    }

    @observable copiedDay
    // @observable arrOptions
    @observable numOfWantedShifts
    @observable weekRequestObj


    @action copyDay = (argDayNumber) => {
        this.copiedDay = this.weekRequestObj.arrOptions[argDayNumber]
    }

    @action onChangeSingleOption = (value, argSingleOption, i, dayNum) => {
        this.weekRequestObj.arrOptions[dayNum][argSingleOption] = value
    }

    @action makeDayOff = (argDayNum) => {
        this.weekRequestObj.arrOptions[argDayNum].Morning = false
        this.weekRequestObj.arrOptions[argDayNum].Evening = false
        this.weekRequestObj.arrOptions[argDayNum].Night = false
    }

    @action pasteDay = (argDayNumber) => {

        let tempArr = [...this.weekRequestObj.arrOptions]
        tempArr[argDayNumber].Morning = this.copiedDay.Morning
        tempArr[argDayNumber].Evening = this.copiedDay.Evening
        tempArr[argDayNumber].Night = this.copiedDay.Night

        this.weekRequestObj.arrOptions = [...tempArr]
    }

}