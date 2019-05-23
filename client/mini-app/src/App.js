import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Results from './pages/Results/Results';
import Details from './pages/Details/Details';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <header className="App__header">
          <Link to="/">
            <h3 className="App__header--logo">RUB</h3>
          </Link>
        </header>
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/results" exact component={Results}/>
          <Route path="/details/:place_id"  render={(props) => <Details {...props}/>}/> 
        </Switch>
      </BrowserRouter>
  );
}
}

export default App;
