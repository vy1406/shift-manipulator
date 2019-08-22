import React, { Component } from 'react';
import InnerMenu from './components/inner-menu/InnerMenu';
import { observer, inject } from 'mobx-react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import LinksBar from './components/link-bar/LinksBar';
import Footer from './components/footer/Footer';


@inject("generalStore")
@observer
class App extends Component {

  render() {
    return (
      <div className="col">
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
      </div>
    );
  }
}

export default App;
