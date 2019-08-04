import { observable } from 'mobx'

export class Worker {
    @observable name

    constructor(name) {
        this.name = name
    }
}