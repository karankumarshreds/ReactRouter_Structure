import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';

import Chocolates from './Components/Chocolate';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Navbar from './Components/Navbar';
import VendingMachine from './Components/VendingMachine';

function App() {
  return (
    <div className="App">  
      <Switch>
        <Route exact path="/" render={() => <VendingMachine/>}/>
        <Route exact path="/soda" render={() => <Soda/>}/>
        <Route exact path="/chips" render={() => <Chips/>}/>
        <Route exact path="/chocolates" render={() => <Chocolates/>}/>
      </Switch>

      <Navbar />

    </div>
  );
}

export default App;
