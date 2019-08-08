import { action } from 'mobx'
import axios from 'axios';

export class OptionsStore {

    @action getLastOptions = async () => {
        let options = await axios.get("http://localhost:8080/options")
        return options.data
    }

}