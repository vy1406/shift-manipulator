import React, { Component } from 'react';

import { observer, inject } from 'mobx-react';
import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './App.css';
import LinksBar from './components/link-bar/LinksBar';
import Footer from './components/footer/Footer';
import CustomFab from './components/shared/CustomFab';
import LoginForm from './components/login/LoginForm';
import GiveOptions from './components/give-options/GiveOptions';
import WorkSchedule from './components/work-schedule/WorkSchedule';
import BuildWeek from './components/build-week/BuildWeek';

@inject("generalStore")
@observer
class App extends Component {

  // Fab - floating action button

  renderRoutes = () => {
    return (
      <div>
        <Route exact path="/login" render={() => <LoginForm/>} />
        <Route exact path="/giveoptions" render={() => <GiveOptions/>} />
        <Route exact path="/schedule" render={() => <WorkSchedule/>} />
        <Route exact path="/build" render={() => <BuildWeek/>} />
      </div>
    )
  }

  renderMainApp = () => {
    return (
      <Router>
        <div className="row">
          <div className="header">
            <LinksBar />
          </div>
          <div className="content">
            {this.renderRoutes()}
          </div>
          <div className="footer col s12">
            <Footer />
          </div>
          <CustomFab />
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
      </div>

    );
  }
}

export default App;
