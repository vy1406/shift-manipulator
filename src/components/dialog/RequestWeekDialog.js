import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


@inject("dialogStore")
@observer
class RequestWeekDialog extends Component {


    handleClickOpen = () => this.props.dialogStore.setOpen(true)
    
    handleClose = () => this.props.dialogStore.setOpen(false)
    
    requestOptions = () => this.props.dialogStore.setOpen(false)
    

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Open form dialog
                </Button>
                <Dialog open={this.props.dialogStore.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Request Week Options</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Send an email to everybody to submit options
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                    </Button>
                        <Button onClick={this.requestOptions} color="primary">
                            Request Options
                    </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}


export default RequestWeekDialog;