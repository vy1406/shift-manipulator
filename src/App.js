import React, { Component } from 'react';
import InnerMenu from './components/inner-menu/InnerMenu';
import { observer, inject } from 'mobx-react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import LinksBar from './components/link-bar/LinksBar';
import Footer from './components/footer/Footer';
import Login from './components/login/Login';


@inject("generalStore")
@observer
class App extends Component {

  renderMainApp = () => {
    return (
      <div className="row">
        <div className="header">
          <LinksBar />
        </div>
        <div className="content">
          {this.props.generalStore.currentComponent === ""
            ?
            <InnerMenu />
            :
            this.props.generalStore.currentComponent}
        </div>
        <div className="footer col s12">
          <Footer />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="content">
        {/* {this.props.generalStore.curUser === ""
          ?
          <Login />
          :
          this.renderMainApp()} */}
          {this.renderMainApp()}
      </div>
    );
  }
}

export default App;
