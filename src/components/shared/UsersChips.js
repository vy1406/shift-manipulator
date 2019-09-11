import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';


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

class UsersChips extends Component {
    constructor(){
        super()
        this.state = {
            arrUsersWithKeys : []
        }
    }

    async componentDidMount(){
        const response_users = await axios.get("http://localhost:8080/users")
        const arrUsersWithKeys = response_users.data.map((u, index) => { return { key:index, label: u.user,  } })
        this.setState({
            arrUsersWithKeys
        })
    }

    handleDelete = chipToDelete => () => {
        let filteredChips = this.state.arrUsersWithKeys.filter(chip => chip.key !== chipToDelete.key)
        this.setState({
            arrUsersWithKeys : filteredChips
        })
    };

    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                {this.state.arrUsersWithKeys.map(data => {
                    let icon;

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />;
                    }

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

export default withStyles(styles)(UsersChips )