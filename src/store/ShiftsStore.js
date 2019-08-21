import { observable, action } from 'mobx'

export class ShiftsStore {

    constructor() {
        this.copiedDay = ""
        this.arrOptions = []
    }

    @observable copiedDay
    @observable arrOptions

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
        console.log(this.arrOptions[argDayNumber])
        console.log(this.copiedDay)
        let tempArr = [...this.arrOptions]

        // console.log(tempArr)
        tempArr[argDayNumber].Morning = this.copiedDay.Morning
        tempArr[argDayNumber].Evening = this.copiedDay.Evening
        tempArr[argDayNumber].Night = this.copiedDay.Night

        this.arrOptions = [...tempArr]
    }
}