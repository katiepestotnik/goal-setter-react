import { useContext, useEffect, useState } from "react";
import { Context } from "../Global";
import { Link, Route, Switch } from 'react-router-dom';
import SingleGoal from "./SingleGoal";
import Form from "./Form";
import AllGoals from "./AllGoals";
const Main = (props) => {
    const [state, setState] = useContext(Context);
    const { url, token } = state;
    const [goals, setGoals] = useState([]);
    const nullGoal = {
        name: "",
        start_date: "",
        end_date: "",
        description: "",
        user_id: ""
    };
    const [targetGoal, setTargetGoal] = useState(nullGoal);
    const getGoals = async () => {
        const response = await fetch(`${url}/goals`, {
            method: 'get',
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        });
        const data = await response.json();
        setGoals(data);
        console.log(data);
        setGoals(data)
    };
    const addGoal = async (newGoal) => {
        const response = await fetch(`${url}/goals`, {
            method: 'post',
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(newGoal),
        });
        getGoals();
    };
    const getTargetGoal = (goal) => {
        setTargetGoal(goal);
        props.history.push("/main/edit");
    };
    const updateGoal = async (goal) => {
        const response = await fetch(`${url}/goals/`+ goal.id, {
          method: "put",
          headers: {
            Authorization: "bearer " + token,
            "Content-Type": "application/json",
            "Accept":"application/json"
          },
          body: JSON.stringify(goal),
        });
        getGoals();
    };
    const deleteGoal = async (goal) => {
        const response = await fetch(`${url}/goals/`+ goal.id, {
            method: "delete",
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
              },
        });
        getGoals();
        props.history.push("/main");
      };
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (!token) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        };
        getGoals();
    }, []);
    return(
        <Switch>
        <Route
          exact path="/main"
                render={(rp) => <AllGoals {...rp} goals={goals}
                />}>
        </Route>
        <Route
          path="/main/goal/:id"
                render={(rp) => <SingleGoal {...rp}
                    goals={goals} edit={getTargetGoal}
                    deleteGoal={deleteGoal}/>}>
            </Route>
            <Route
          path="/main/new"
                render={(rp) => <Form
                    {...rp}
                    state={state}
                    initialGoal={nullGoal}
                    handleSubmit={addGoal}
                    buttonLabel="Create Goal"/>}>
        </Route>
        <Route
          path="/main/edit"
                render={(rp) => (<Form {...rp}
                    initialGoal={targetGoal}
                    handleSubmit={updateGoal}
                    buttonLabel="Update Goal"
                    state={state}/>
                )}>
        </Route>
        </Switch>)
};
export default Main;