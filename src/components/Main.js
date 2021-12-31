import { useEffect, useState, useContext } from 'react';
import { Context } from "../Global";
import { Route, Switch } from 'react-router-dom';
import AllGoals from '../pages/AllGoals';
import SingleGoal from '../pages/SingleGoal';
import Form from '../pages/Form';
const Main = (props) => {
    const [state, setState] = useContext(Context);
    const { url, token } = state;

    const [goals, setGoals] = useState([]);
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
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (state.token === null || state.token === undefined) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        };
        getGoals();
    }, []);
    return (
        <>
            <h1>All Goals</h1>
            <Switch>
                <Route
                    path="/main">
                    <AllGoals goals={goals}/>
                </Route>
                <Route
                    path="/goal/:id"
                    render={(rp) => <SingleGoal
                            {...rp}
                        goals={goals}
                    />}
                />
                <Route
                path="/new">
                    render={(rp) => <Form {...rp}/>}
                </Route>

                <Route
                    path="/edit"
                    render={(rp) => <Form {...rp} />}
                />
                </Switch>
        </>

    )
}
export default Main