import { observable, action } from 'mobx'

export class ShiftsStore {

    constructor() {
        this.copiedDay = ""
        this.arrOptions = []
    }

    @observable copiedDay
    @observable arrOptions

    @action copyDay = (argCopiedDayOptions) => {
        this.copiedDay = argCopiedDayOptions
    }

    @action onChangeSingleOption = (value, argSingleOption, i, dayNum) => {
        this.arrOptions[dayNum] === undefined ?
            this.arrOptions[dayNum] = { [argSingleOption]: value }
            :
            this.arrOptions[dayNum][argSingleOption] = value
    }
}