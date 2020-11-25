import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
         <div className="App">
           <Switch>
             <Route path = "/">
           <h1>AMAZON SHIT</h1>
           </Route>
             <Route path = "/login">
               <h1>Login Page</h1>
             </Route>
           </Switch>
              
         </div>
    </Router>
    
  );
}

export default App;
