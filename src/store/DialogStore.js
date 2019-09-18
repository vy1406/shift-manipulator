import { observable, action } from 'mobx'
import axios from 'axios';

export class DialogStore {

    @observable msg = ""
    @observable isOpenWeekRequest = false
    @observable isDisabled = false
    @observable arrUsersWithKeys = [] // for chips component.
    @observable weekRequestObj = {
        dateFrom: Date,
        dateTo: null,
        numOfShiftsRequested: 7,
        arrOptions: []
    }

       
    @observable isOpenAddUser = false
    @observable user = {
        isAdmin : false
    }
    
    // ----------------------------
    // Request week dialog store
    // ----------------------------
    @action sendEmailNotification = async () => {

    }

    @action setOpenWeekRequest = (isOpen) => this.isOpenWeekRequest = isOpen

    @action handleInput = (key, event) => {
        this[key] = event.target.value
    }

    @action handleDateTo = (date) => { this.weekRequestObj.dateTo = date }

    @action handleDateFrom = (date) => {
        this.weekRequestObj.dateFrom = date
        let someDate = new Date(date);
        let duration = 7; //add week
        someDate.setTime(someDate.getTime() + (duration * 24 * 60 * 60 * 1000));
        this.weekRequestObj.dateTo = someDate
    }


    @action submitRequestWeek = async () => {
        // this.disableSubmitButton(true)
        // this.msg = "Saving the request. Please wait."
        // this.weekRequestObj.arrOptions = this.createOptions()
        let params = this.weekRequestObj
        // axios.post("http://localhost:8080/weekrequest", params)
        //     .then(() => {
        //         this.msg = "Request sent."
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         this.msg = "Some error. Contact Vova."
        //     })
        
        let emails = this.arrUsersWithKeys.map(u => u.email )
        let adminEmail = this.getAdminEmail()
        let dates = {
            dateFrom: this.weekRequestObj.dateFrom,
            dateTo: this.weekRequestObj.dateTo
        }
        params = { emails, adminEmail, dates }
        axios.post("http://localhost:8080/emailnotify", params)
            .then(() =>
                this.msg = "sent emails.")
            .catch((err) => {
                console.log(err)
            })
    }

    getAdminEmail = () => {
        return "velisave@admin.com"
    }
    // creating custom-dummy arrOptions :
    //  return arrOptions = [
    //     {
    //         "Morning": true,
    //         "Evening": true,
    //         "Night": true
    //     },
    // ...]
    // making custom, in future version should be customized by admin. 

    createOptions = () => {
        let arrOptions = []
        let temp = {}
        for (let i = 0; i < 7; i++) {
            temp = {
                "Morning": true,
                "Evening": true,
                "Night": true
            }
            arrOptions.push(temp)
        }
        return arrOptions
    }

    disableSubmitButton = flag => this.isDisabled = flag


    // ----------------------------
    // Add user dialog store
    // ---------------------------- 

    @action handleAddUserInput = (key, value) => {
        this.user[key] = value
    }

    @action addUser = async (adminEmail) => {
        this.isDisabled = true
        let params = {
            user : this.user,
            adminEmail
        }
        axios.post("http://localhost:8080/user", params)
        .then(() =>
        this.msg = "Email sent to the new user.")
    }

    @action onChangeIsAdmin = () => this.user.isAdmin = !this.user.isAdmin

    @action setOpenAddUser = (isOpen) => this.isOpenAddUser = isOpen
    
    @action closeOpenUser = () => {
        this.setOpenAddUser(false)
        this.msg = ""
        this.isDisabled = false
    }
}