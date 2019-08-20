import { observable, action } from 'mobx'

export class ShiftsStore {

    constructor() {
        this.copiedDay = ""
    }

    @observable copiedDay

    @action copyDay = (argCopiedDayOptions) => {
        this.copiedDay = argCopiedDayOptions
    }

}