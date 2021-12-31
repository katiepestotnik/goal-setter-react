import './App.css';
import Header from "./components/Header";
// all posts in main
import Main from "./pages/Main";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import Global from "./Global";

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
      </Switch>
    </Global>
  );
}
export default App;
