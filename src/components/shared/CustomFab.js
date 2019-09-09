import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import CalendarToday from '@material-ui/icons/CalendarToday';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        // height: 380,
    },
    speedDial: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
});

// const actions = [
//     { icon: <FileCopyIcon />, name: 'Copy' },
//     { icon: <SaveIcon onClick={() => console.log(this.props)} />, name: 'Send Week Request' },
//     { icon: <Link to="/calendar"><CalendarToday /></Link>, name: 'Calendar' },
//     { icon: <ShareIcon onClick={event => console.log("share")} />, name: 'Share' },
// ];

@inject("dialogStore")
@observer
class CustomFab extends Component {
    constructor() {
        super()
        this.state = {
            open: false,
            hidden: false,
            actions: [
                { icon: <FileCopyIcon />, name: 'Copy' },
                { icon: <SaveIcon onClick={() => this.props.dialogStore.setOpenWeekRequest(true)} />, name: 'Send Week Request' },
                { icon: <Link to="/calendar"><CalendarToday /></Link>, name: 'Calendar' },
                { icon: <ShareIcon onClick={event => console.log("share")} />, name: 'Share' },
            ]
        }
    }

    setOpen = (value) => {
        this.setState({
            open: value
        })
    }

    handleClick = () => {
        this.setOpen(!this.state.open);
    };

    handleOpen = () => {
        if (!this.state.hidden) {
            this.setOpen(true);
        }
    };

    handleClose = () => {
        this.setOpen(false);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    className={classes.speedDial}
                    hidden={this.state.hidden}
                    icon={<SpeedDialIcon />}
                    onBlur={this.handleClose}
                    onClick={this.handleClick}
                    onClose={this.handleClose}
                    onFocus={this.handleOpen}
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    open={this.state.open}
                >
                    {this.state.actions.map(action => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={this.handleClick}
                        />
                    ))}
                </SpeedDial>
            </div>
        );
    }
}

export default withStyles(styles)(CustomFab)