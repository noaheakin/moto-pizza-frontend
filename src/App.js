import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
// import NavBar from './components/NavBar';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <NavBar /> */}
        <Switch>
          <Route exact path='/' component={Home} />        
        </Switch>
        <h1>Hello, World!</h1>
      </div>
    )
  }
}

export default App;
