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
    @observable selectOptions
    @observable loggedUser = ""

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
        let params = { user: this.userinput, password: this.passwordinput }
        let data = await axios.post("http://localhost:8080/login", params)

        console.log("loggind user : ")
        console.log(data.data[0])
        this.loggedUser = data.data[0]
    }

    @action createDropDownUserSelect = users =>
        this.selectOptions = users.map(u => { return { label: u.user, value: u.user } })

}