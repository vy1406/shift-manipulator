import React, { Component } from 'react';
import Shift from '../shift/Shift';

class GiveOptions extends Component {

    render() {
        let arrOptions = ["lol1", "lol2", "lol3" , "lol4", "lol5", "lol6", "lol7"];
        return (
             <div className="row">
                {arrOptions.map((option,i) => <Shift key={i} day={i} option={option} />)}
             </div>
        )
    }
}

export default GiveOptions;