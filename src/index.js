import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { GeneralStore } from './store/GeneralStore'
import { OptionsStore } from './store/OptionsStore';
import { ShiftsStore } from './store/ShiftsStore';
import { BuildShiftStore } from './store/BuildShiftStore';

const generalStore = new GeneralStore()
const optionsStore = new OptionsStore()
const shiftsStore = new ShiftsStore()
const buildShiftStore = new BuildShiftStore()

const stores = { generalStore, optionsStore, shiftsStore , buildShiftStore }


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
