import {observable, action} from 'mobx'

export class GeneralStore {
    @observable input
    
    @action handleInput = event => {
        this.input = event.target.value
    }
}