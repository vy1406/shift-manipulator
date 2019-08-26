import { observable, action } from 'mobx'
import axios from 'axios';

export class GeneralStore {
    constructor() {
        this.curUser = "velisave"
    }

    @observable email
    @observable password
    @observable curUser = ""
    @observable userMSG = ""
    @observable currentComponent = ""

    @action handleInput = (key, event) => {
        this[key] = event.target.value
    }

    @action login = async () => {
        let params = { email: this.email, password: this.password }
        let data = await axios.post("http://localhost:8080/login", params)
        if (data === "Welcome") this.curUser = data
        else if (data === "Wrong password!") this.userMSG = "Wrong password!"
        else this.userMSG = "Worker with given email doenst exist."
    }

    @action renderComponent = componentToRender => {
        this.currentComponent = componentToRender;
    }

}