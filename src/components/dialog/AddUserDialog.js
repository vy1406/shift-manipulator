import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import UsersChips from '../shared/UsersChips'
import { Container, DatePicker } from "react-materialize";


@inject("dialogStore", "generalStore")
@observer
class AddUserDialog extends Component {

    handleClickOpen = () => this.props.dialogStore.setOpenAddUser(true)

    handleClose = () => this.props.dialogStore.closeOpenUser(false)

    onChange = event => this.props.dialogStore.handleAddUserInput(event.target.id, event.target.value)

    onChangeOption = event => this.props.dialogStore.onChangeIsAdmin(event.target.id, this.props.day)

    registerUser = () => this.props.dialogStore.addUser(this.props.generalStore.loggedUser.email)

    renderDialogContent = () => {

        return (
            <DialogContentText>
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12 m6 l6">
                            <input id="user" type="text" className="validate" placeholder="User" onChange={event => this.onChange(event)}></input>

                        </div>
                        <div className="input-field col s12 m6 l6">
                            <input id="email" type="email" className="validate" placeholder="Email" onChange={event => this.onChange(event)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 m6 l6">
                            <input id="name" type="text" className="validate" placeholder="Name" onChange={event => this.onChange(event)}></input>
                        </div>
                        <div className="input-field col s12 m6 l6">
                            <input id="lastName" type="text" className="validate" placeholder="Last Name" onChange={event => this.onChange(event)}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="switch">
                            <label> is Admin ? No</label>
                            <label>
                                <input id="isAdmin" type="checkbox" checked={this.props.dialogStore.user.isAdmin} onChange={(event) => this.onChangeOption(event)}></input>
                                <span className="lever"></span>
                            </label>
                            <label> Yes </label>
                        </div>
                    </div>
                </div>
            </DialogContentText>
        )
    }

    render() {

        return (
            <div>
                <Dialog fullWidth={true} open={this.props.dialogStore.isOpenAddUser} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    {/* <Dialog fullWidth={true} open={true} onClose={this.handleClose} aria-labelledby="form-dialog-title"> */}
                    <DialogTitle id="form-dialog-title">Add new user</DialogTitle>
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
                        <Button disabled={this.props.dialogStore.isDisabled} onClick={this.registerUser} color="primary">
                            Register User
                        </Button>
                    </DialogActions>
                </Dialog>
            </div >
        );
    }
}



export default AddUserDialog;