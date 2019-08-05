import { observable, action } from 'mobx'

export class GeneralStore {
    @observable email
    @observable password

    @action handleInput = (key,event) => {
        this[key] = event.target.value
    }

}