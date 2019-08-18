import React, { Component } from 'react';
import Shift from '../shift/Shift';

class GiveOptions extends Component {

    render() {
        let optionsLength = 7
        let arrOptions = ["lol1", "lol2", "lol3" , "lol4", "lol5"];
        return (
             <div className="row">
                {arrOptions.map((i) => <Shift key={i} day={i} />)}
             </div>
        )
    }
}

export default GiveOptions;