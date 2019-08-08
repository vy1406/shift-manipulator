import { observable, action } from 'mobx'
import axios from 'axios';

export class OptionsStore {

    @observable options

    @action getLastOptions = async () => {
        let options = await axios.get("http://localhost:8080/options") 
        return options
    }
}