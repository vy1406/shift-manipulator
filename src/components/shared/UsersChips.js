import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { observer, inject } from 'mobx-react';

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: theme.spacing(0.5),
    },
    chip: {
        margin: theme.spacing(0.5),
    },
});

@inject("dialogStore")
@observer
class UsersChips extends Component {

    async componentDidMount() {
        const response_users = await axios.get("http://localhost:8080/users")
        this.props.dialogStore.arrUsersWithKeys = response_users.data.map((u, index) => { return { key: index, label: u.user, email: u.email} })
    }

    handleDelete = chipToDelete => () => {
        let filteredChips = this.props.dialogStore.arrUsersWithKeys.filter(chip => chip.key !== chipToDelete.key)
        this.props.dialogStore.arrUsersWithKeys = filteredChips
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                {this.props.dialogStore.arrUsersWithKeys.map(data => {
                    let icon;

                    // if (data.label === 'React') {
                    //     icon = <TagFacesIcon />;
                    // }

                    return (
                        <Chip
                            key={data.key}
                            icon={icon}
                            label={data.label}
                            onDelete={this.handleDelete(data)}
                            className={classes.chip}
                        />
                    );
                })}
            </Paper>
        );
    }
}

export default withStyles(styles)(UsersChips)