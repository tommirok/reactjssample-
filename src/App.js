import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button.js';
import Result from './components/Result.js';

class App extends Component {
  state = {
      counter: 0
  };

  add = (addValue) =>{
    this.setState((prevState) =>({
      counter: prevState.counter + addValue
    }));
};
 render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Holla HiQ</h1>
        
        </header>
        <Button addValue={1} onClickFunc={this.add}/>
        <Button addValue={10} onClickFunc={this.add}/>
        <Button addValue={100} onClickFunc={this.add}/>

        <Result  added={this.state.counter}/>
      </div>
    );
  }
}

export default App;
