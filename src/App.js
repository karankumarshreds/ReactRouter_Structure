import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';

import Chocolates from './Components/Chocolate';
import Soda from './Components/Soda';
import Chips from './Components/Chips';
import Navbar from './Components/Navbar';
import VendingMachine from './Components/VendingMachine';
import ThingGenerator from './Components/ThingGenerator';

function App() {
  return (
    <div className="App">  
    <Navbar />
    
      <Switch>

        <Route exact path="/" render={() => <VendingMachine/>}/>
        <Route exact path="/soda" render={() => <Soda/>}/>
        <Route exact path="/chips" render={() => <Chips/>}/>
        <Route exact path="/chocolates" render={() => <Chocolates/>}/>

        <Route exact path="/ThingGenerator/:NAME"
            render={(props) => <ThingGenerator stuff={props.match.params.NAME} />} />
        
        <Route exact render={() => <h1>404 Error</h1>} />

      </Switch>

    </div>
  );
}

export default App;
