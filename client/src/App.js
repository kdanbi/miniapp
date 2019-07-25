import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.scss';
//import Home from './pages/Home/Home';
import Main from './components/Main';
import Results from './components/Result';
import Details from './pages/Details/Details';
import logo from './assets/logo.png'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App__header">
          <Link to="/">
            <img src={logo} className="App__header--logo" alt="logo"/>
          </Link>
        </header>
        <Switch>
          <Route path="/"  exact component={Main}/>
          <Route path="/results" exact component={Results}/>
          <Route path="/details/:place_id"  render={(props) => <Details {...props}/>}/> 
        </Switch>
      </BrowserRouter>
  );
}
}

export default App;
