import React, { Component } from 'react';
import './App.css';
import MyList from './components/MyList';
import Recommendations from "./components/Recommendations";

class App extends Component {
  render() {
    return (
      <div className="App">
       <MyList />
       <Recommendations />
      </div>
    );
  }
}

export default App;
