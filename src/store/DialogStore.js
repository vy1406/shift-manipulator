import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable isOpenWeekRequest = false
    @observable isDisabled = false
    @observable weekRequestObj = {
        dateFrom: Date,
        dateTo: null
    }


    @action setOpenWeekRequest = (isOpen) => this.isOpenWeekRequest = isOpen

    @action handleInput = (key, event) => {
        this[key] = event.target.value
    }

    @action handleDateTo = (date) => { this.weekRequestObj.dateTo = date }

    @action handleDateFrom = (date) => {
        this.weekRequestObj.dateFrom = date
        let someDate = new Date(date);
        let duration = 7; //add week
        someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
        this.weekRequestObj.dateTo = someDate
    }


    @action requestWeek = async () => {
        console.log("sending.")
        this.isDisabled = true
        this.msg = "Saving the request. Please wait."
        setTimeout(() => {
            this.msg = "Request sent."
        }, 3000);
        // let params = this.user
        // await axios.post("http://localhost:8080/user", params)
    }
}