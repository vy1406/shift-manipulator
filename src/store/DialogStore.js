import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable open = false

    @action setOpen = (isOpen) => this.open = isOpen
    
    @action handleInput = (key, event) => {
        this[key] = event.target.value
    }

    @action requestWeek = async () => {
        // let params = this.user
        // await axios.post("http://localhost:8080/user", params)
    }
}