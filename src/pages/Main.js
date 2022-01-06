import { useContext, useEffect, useState } from "react";
import { Context } from "../Global";
import { Route, Switch } from 'react-router-dom';
import SingleGoal from "./SingleGoal";
import Form from "./Form";
import FormUpdate from "./FormUpdate";
import AllGoals from "./AllGoals";
const Main = (props) => {
    const [state, setState] = useContext(Context);
    const { url, token } = state;
    const [goals, setGoals] = useState([]);
    const [updates, setUpdates] = useState([]);
    const nullGoal = {
        name: "",
        start_date: "",
        end_date: "",
        description: "",
        user_id: ""
    };
    const [targetGoal, setTargetGoal] = useState(nullGoal);
    // const nullUpdate = {
    //     actions: "",
    //     self_evaluation: "",
    //     completed: "",
    // };
    
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
        //convert date here?
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
        //convert date here?
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
    const getUpdates = async () => {
        const response = await fetch(`${url}/updates`, {
            method: 'get',
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
            }
        });
        const data = await response.json()
        setUpdates(data);
    };
    const addUpdate = async (newUpdate) => {
        const response = await fetch(`${url}/updates`, {
            method: 'post',
            headers: {
                Authorization: "bearer " + token,
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
            body: JSON.stringify(newUpdate),

        });
        getUpdates();
        //convert date here?
    };
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        };
        getGoals();
        getUpdates();
    }, []);
    return(
        <Switch>
        <Route
          exact path="/main"
                render={(rp) => <AllGoals {...rp} goals={goals}
                />}>
        </Route>
        <Route
          exact path="/main/goal/:id"
                render={(rp) => <SingleGoal {...rp}
                    goals={goals} edit={getTargetGoal}
                    deleteGoal={deleteGoal}
                    updates={updates}/>}>
            </Route>
            <Route
          path="/main/new"
                render={(rp) => <Form
                    {...rp}
                    state={state}
                    initialGoal={nullGoal}
                    handleSubmit={addGoal}
                    buttonLabel="CREATE"/>}>
            </Route>
            <Route
          path="/main/goals/:id/update"
                render={(rp) => <FormUpdate
                    {...rp}
                    state={state}
                    // initialUpdate={nullUpdate}
                    handleSubmit={addUpdate}
                    updates={updates}
                    goals={goals}
                    buttonLabel="UPDATE"/>}>
        </Route>
        <Route
          path="/main/edit"
                render={(rp) => (<Form {...rp}
                    initialGoal={targetGoal}
                    handleSubmit={updateGoal}
                    buttonLabel="UPDATE"
                    state={state}/>
                )}>
        </Route>
        </Switch>)
};
export default Main;