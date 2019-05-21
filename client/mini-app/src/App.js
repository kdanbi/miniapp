import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Result from './components/Result';
import './App.scss';
import Home from './pages/Home/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App__header">
          <h3 className="App__header--logo">RUB</h3>
        </header>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
  );
}
}

export default App;
