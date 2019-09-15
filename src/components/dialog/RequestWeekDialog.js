import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MomentUtils from '@date-io/moment';
// import { MuiPickersUtilsProvider } from '@material-ui/pickers';
// import { KeyboardDatePicker } from "@material-ui/pickers";
import { Container, DatePicker } from "react-materialize";
import UsersChips from '../shared/UsersChips'

@inject("dialogStore")
@observer
class RequestWeekDialog extends Component {

    handleClickOpen = () => this.props.dialogStore.setOpenWeekRequest(true)

    handleClose = () => this.props.dialogStore.setOpenWeekRequest(false)

    requestOptions = () => this.props.dialogStore.submitRequestWeek(false)

    formatDate = (date) => {
        if (date != null) {
            const monthNames = [
                "Jan", "Feb", "Mar",
                "Apl", "May", "Jun", "Jul",
                "Aug", "Sep", "Oct",
                "Nov", "Dec"
            ];
            const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            let day = date.getDate()
            let weekIndex = date.getDay()
            let monthIndex = date.getMonth()
            let year = date.getYear() + 1900

            let result = monthNames[monthIndex] + ' ' + day + ', ' + year;
            return result
        }

    }

    renderDialogContent = () => {

        return (
            <DialogContentText>
                {/* <MuiPickersUtilsProvider utils={MomentUtils}>
                    <KeyboardDatePicker
                        clearable
                        value={this.props.dialogStore.weekRequestObj.dateFrom}
                        placeholder="10/10/2018"
                        onChange={this.props.dialogStore.handleDateFrom}
                        minDate={new Date()}
                        format="DD/MM/YY"
                    />
                </MuiPickersUtilsProvider> */}
                <p>
                    <label>From</label>
                    <DatePicker
                        onChange={(target) => this.props.dialogStore.handleDateFrom(target)}
                    />
                </p>
                <p> <label>To </label>
                    <div>
                        {this.formatDate(this.props.dialogStore.weekRequestObj.dateTo)}
                    </div>
                </p>
                <label>Send Email notificatio to: </label>
                <UsersChips />
            </DialogContentText>
        )
    }

    render() {

        return (
            <div>
                <Dialog fullWidth={true} open={this.props.dialogStore.isOpenWeekRequest} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Request Week Options</DialogTitle>
                    <DialogContent>
                        {this.props.dialogStore.msg === "" ?
                            this.renderDialogContent()
                            :
                            this.props.dialogStore.msg}
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button disabled={this.props.dialogStore.isDisabled} onClick={this.requestOptions} color="primary">
                            Request Options
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}


export default RequestWeekDialog;