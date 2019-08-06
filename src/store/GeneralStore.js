import { observable, action } from 'mobx'
import axios from 'axios';

export class GeneralStore {
    @observable email
    @observable password

    @action handleInput = (key,event) => {
        this[key] = event.target.value
    }

    @action login = async () => {
        let params = {email : this.email, password: this.password}
        let data = await axios.post("http://localhost:8080/login", params)
    }
}