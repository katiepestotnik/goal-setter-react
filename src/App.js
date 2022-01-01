import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Main from './pages/Main';
import SingleGoal from './pages/SingleGoal';
//import AllGoals from './pages/AllGoals';
import Form from './pages/Form';
import { Switch, Route } from "react-router-dom";
//import { Context } from './Global';
import Global from "./Global";
//import { useContext, useEffect, useState } from 'react';

function App(props) {
  return (
    <Global>
      <Header />
      <Switch>
        <Route exact path="/"
          render={(rp)=> <Home/>}>
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
          render={(rp)=> <Main {...rp}/>}>
        </Route>
        {/* <Route
          path="/goals"
          render={(rp)=> <AllGoals {...rp}/>}>
        </Route> */}
        <Route
          path="/goal/:id"
          render={(rp)=> <SingleGoal {...rp}/>}>
        </Route>
        <Route
          path="/new"
          render={(rp) => <Form {...rp}/>}>
        </Route>
        <Route
          path="/edit"
          render={(rp) => <Form {...rp} />}>
        </Route>
      </Switch>
    </Global>
  );
}
export default App;
