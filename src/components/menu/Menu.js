import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

@inject("optionsStore")
@observer
class Menu extends Component {

    componentWillMount = async () => {
        let options = await this.props.optionsStore.getLastOptions()
    }

    render() {
        return (
            <div className="menu">
                <div className="list-of-options">
                    {this.options.map((option, index) =>
                        <Option></Option>)
                    }
                </div>
            </div >
        )
    }
}

export default Menu;