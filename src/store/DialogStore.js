import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable isOpenWeekRequest = false
    @observable isDisabled = false

    @action setOpenWeekRequest = (isOpen) => this.isOpenWeekRequest = isOpen
    
    @action handleInput = (key, event) => {
        this[key] = event.target.value
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