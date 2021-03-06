import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import {useStateValue} from './StateProvider';
import { auth } from './firebase';
function App() {
  const [{basket},dispatch] = useStateValue();
  console.log(basket);
  const unsubscribe = useEffect(()=>{
    auth.onAuthStateChanged((authUser => {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
      return (()=>unsubscribe());
    }))
  })
  return (
    <Router>
         <div className="App">
           <Switch>
             <Route exact path = "/">
               <Header />
               <Home />
           
           </Route>
             <Route exact path = "/login">
               <Login />
             </Route>
             <Route exact path = "/checkout">
               <Header />
               <Checkout />
             </Route>
           </Switch>
              
         </div>
    </Router>
    
  );
}

export default App;
