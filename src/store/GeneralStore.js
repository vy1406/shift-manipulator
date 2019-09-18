import { observable, action } from 'mobx'
import axios from 'axios';

export class GeneralStore {

    @observable userinput = ""
    @observable passwordinput = ""
    @observable email
    @observable password
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

        if (data.data.isUserFound) {
            if (data.data.isWrongPassword)
                console.log(data.data.error)
            else
                this.loggedUser = data.data.user
        }
        else
            console.log(data.data.error)
        
    }

    @action logout = () => {
        this.loggedUser = ""
    }

    @action createDropDownUserSelect = users =>
        this.selectOptions = users.map(u => { return { label: u.user, value: u.user } })

}