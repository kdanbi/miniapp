import React from 'react';
import Main from './components/Main';
import Result from './components/Result';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App__header">
          <h3 className="App__header--logo">RUB</h3>
        </header>
        <Main />
        <Result />
      </div>
  );
}
}

export default App;
