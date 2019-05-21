import React from 'react';
import {Router, Switch, Route} from 'react-router';
import Result from './components/Result';
import './App.scss';
import Home from './pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <header className="App__header">
          <h3 className="App__header--logo">RUB</h3>
        </header>
        <Switch>
          <Route path="/" exact Component={Home}/>
        </Switch>
      </Router>
  );
}
}

export default App;
