import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable isOpenWeekRequest = false
    @observable isDisabled = false
    @observable weekRequestObj = {
        dateFrom: Date,
        dateTo: null,
        numOfShiftsRequested: 7
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
        this.disableSubmitButton(true)
        this.msg = "Saving the request. Please wait."
        let params = this.weekRequestObj
        axios.post("http://localhost:8080/weekrequest", params)
            .then(() => {
                this.msg = "Request sent."
            })
            .catch((err) => {
                console.log(err)
                this.msg = "Some error. Contact Vova."
            })
    }

    disableSubmitButton = flag => this.isDisabled = flag
}