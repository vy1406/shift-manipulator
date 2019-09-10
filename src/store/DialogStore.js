import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable isOpenWeekRequest = false
    @observable isDisabled = false
    @observable weekRequestObj = {
        dateFrom: Date,
        dateTo: null,
        numOfShiftsRequested: 7,
        arrOptions: []
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


    @action submitRequestWeek = async () => {
        this.disableSubmitButton(true)
        this.msg = "Saving the request. Please wait."
        this.weekRequestObj.arrOptions = this.createOptions()
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

    // creating custom-dummy arrOptions :
    //  return arrOptions = [
    //     {
    //         "Morning": true,
    //         "Evening": true,
    //         "Night": true
    //     },
    // ...]
    // making custom, in future version should be customized by admin. 

    createOptions = () => {
        let arrOptions = []
        let temp = {}
        for (let i = 0; i < 7; i++) {
            temp = {
                "Morning": true,
                "Evening": true,
                "Night": true
            }
            arrOptions.push(temp)
        }
        return arrOptions
    }

    disableSubmitButton = flag => this.isDisabled = flag
}