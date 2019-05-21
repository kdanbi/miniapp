import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App__header">
          <h3 className="App__header--logo">RUB</h3>
        </header>
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/" component={Results}/>
        </Switch>
      </BrowserRouter>
  );
}
}

export default App;
