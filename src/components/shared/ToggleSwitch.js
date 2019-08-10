import React, { Component } from 'react';
import './shared.css'

class ToggleSwitch extends Component {

    constructor(props) {
      super(props)
      this.state = { isToggleOn: false }
      
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
      this.setState((prevState) => ({
        isToggleOn: !prevState.isToggleOn
      }))
    }
    
    render() {
      return (
        <div onClick={this.handleClick} className="ToggleSwitch">
          <div className={this.state.isToggleOn ? 'knob active' : 'knob'} />
        </div>
      )
    }
  }

  
export default ToggleSwitch;