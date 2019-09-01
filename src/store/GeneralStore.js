import { observable, action } from 'mobx'
import axios from 'axios';

export class GeneralStore {
    constructor() {
        this.curUser = ""
    }

    @observable userinput = ""
    @observable passwordinput = ""
    @observable email
    @observable password
    @observable curUser = ""
    @observable userMSG = ""
    @observable currentComponent = ""
    @observable selectOptions

    // add user
    // user = { user, name, lastName, email, password }
    @observable user = {}

    @action handleInput = (key, event) => {
        this[key] = event.target.value
    }

    @action handleAddUserInput = (key, value) => {
        this.user[key] = value
    }

    @action addUser = async () => {
        let params = this.user
        await axios.post("http://localhost:8080/user", params)
    }

    @action login = async () => {
        // let params = { email: this.email, password: this.password }
        // let data = await axios.post("http://localhost:8080/login", params)
        // if (data === "Welcome") this.curUser = data
        // else if (data === "Wrong password!") this.userMSG = "Wrong password!"
        // else this.userMSG = "Worker with given email doenst exist."
        console.log(this.userinput + " : " + this.passwordinput)
        this.curUser = this.userinput
    }

    @action createDropDownUserSelect = users =>
        this.selectOptions = users.map(u => { return { label: u.user, value: u.user } })

    @action renderComponent = componentToRender => {
        this.currentComponent = componentToRender;
    }

}