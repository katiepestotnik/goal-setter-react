import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import Global from "./Global";
// import AllGoals from './pages/AllGoals';
// import SingleGoal from './pages/SingleGoal';
// import Form from './pages/Form';
// import { Context } from './Global';
// import { useState, useEffect, useContext } from 'react';



function App(props) {
  return (
    <Global>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route
          path="/signup"
          render={(rp)=> <Signup {...rp}/>}>
        </Route>
        <Route
          path="/login"
          render={(rp)=> <Login {...rp}/>}>
        </Route>
        <Route
          path="/main"
          render={(rp)=> <Main {...rp} />}>
        </Route>
      </Switch>
    </Global>
  );
}

export default App;
