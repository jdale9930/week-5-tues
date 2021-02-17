import React from 'react';
import './App.css';
import {Switch, Route, BrowserRouter as Router, Redirect, NavLink} from "react-router-dom"
import LoginPage from "./components/Login/LoginPage"
import SearchPage from "./components/Search/SearchPage"
import FavoritesPage from "./components/Favorites/FavoritesPage"



function App() {
  return (
    <>
    <Router>
      <nav>
        <NavLink className = "link" to ="/login" activeClassName ='activeLinks'>Login</NavLink>
        <NavLink className = "link" to ="/search" activeClassName ='activeLinks'>Search</NavLink>
        <NavLink className = "link" to ="/favorites" activeClassName ='activeLinks'>Favorites</NavLink>
      </nav>
      <main>
        <Switch>
          <Route path ="/login" component = {LoginPage}/>
          <Route path ="/search" component = {SearchPage}/>
          <Route path ="/favorites" component = {FavoritesPage}/>
          <Route path = "*" >
            <Redirect to="/search"/>
          </Route>
        </Switch>
      </main>
      <footer>Footer weeee</footer>
      </Router>
    </>
  );
}

export default App;
