import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject("generalStore")
@observer
class InnerMenu extends Component {

    render() {
        return (
            <div>
                inner menu..
            </div>
        )
    }
}

export default InnerMenu;