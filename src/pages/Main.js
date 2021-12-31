import { useEffect, useState, useContext } from 'react';
import { Context } from "../Global";
import { Route, Switch } from 'react-router-dom';
import Index from './Index';
const Main = (props) => {
    const [state, setState] = useContext(Context);
    const { url, token } = state;

    const [goals, setGoals] = useState([]);
    const getGoals = async () => {
        const response = await fetch(`${state.url}/goals`, {
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

    // const auto = async () =>        
    // {
    // const response = await fetch(`${state.url}/auto_login`, {
    //     headers: {
    //         Authorization: `Bearer ${state.token}`
    //     }
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // };


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
            <Switch>
                <Route
                    exact path="/main">
                    <Index goals={goals}/>
                </Route>
            </Switch>
        </>

    )
}
export default Main