import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RequestWeekDialog from './components/dialog/RequestWeekDialog';
import './App.css';
import LinksBar from './components/link-bar/LinksBar';
import Footer from './components/footer/Footer';
import CustomFab from './components/shared/CustomFab';
import LoginForm from './components/login/LoginForm';
import GiveOptions from './components/give-options/GiveOptions';
import WorkSchedule from './components/work-schedule/WorkSchedule';
import BuildWeek from './components/build-week/BuildWeek';
import CalendarCmp from './components/calendar/CalendarCmp';
import AddUser from './components/add-user/AddUser';


@inject("generalStore")
@observer
class App extends Component {

  // Fab - floating action button

  renderRoutes = () => {
    return (
      <div>
        <Route exact path="/logout" render={() => <LoginForm />} />
        <Route exact path="/giveoptions" component={GiveOptions} />
        <Route exact path="/" component={WorkSchedule} />
        <Route exact path="/build" component={BuildWeek} />
        <Route exact path="/calendar" component={CalendarCmp} />
        <Route exact path="/adduser" component={AddUser}/>
      </div>
    )
  }

  renderDialogs = () => {
    return (
      <div>
        <RequestWeekDialog />
      </div>
    )
  }

  renderMainApp = () => {
    return (
      <Router>
        <div className="row">
          <div className="header">
            <div className="row">
              <LinksBar />
            </div>
          </div>
          <div className="content">
            {this.renderRoutes()}
          </div>
          <div className="footer col s12">
            {/* <Footer /> */}
          </div>
          <CustomFab />
          {this.renderDialogs()}
        </div>
      </Router>
    )
  }

  render() {
    return (

      <div className="content">
        {/* {this.props.generalStore.loggedUser === ""
          ?
          <LoginForm />
          :
          this.renderMainApp()} */}
        {this.renderMainApp()}
        {/* <CalendarCmp /> */}
        {/* <RequestWeekDialog/> */}
      </div>

    );
  }
}

export default App;
