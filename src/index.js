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
import { WorkScheduleStore } from './store/WorkScheduleStore';
import {DialogStore } from './store/DialogStore'

const generalStore = new GeneralStore()
const optionsStore = new OptionsStore()
const shiftsStore = new ShiftsStore()
const buildShiftStore = new BuildShiftStore()
const workScheduleStore = new WorkScheduleStore()
const dialogStore = new DialogStore()

const stores = { generalStore, optionsStore, shiftsStore , buildShiftStore , workScheduleStore, dialogStore}


ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
