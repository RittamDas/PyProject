import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
         <div className="App">
           <Switch>
             <Route exact path = "/">
           <h1>AMAZON SHIT</h1>
           </Route>
             <Route exact path = "/login">
               <h1>Login Page</h1>
             </Route>
           </Switch>
              
         </div>
    </Router>
    
  );
}

export default App;
