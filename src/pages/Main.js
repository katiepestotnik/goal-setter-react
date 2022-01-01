import { useContext, useEffect, useState } from "react";
import { Context } from "../Global";
import { Link } from 'react-router-dom';
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
    return(
    <div>
            <h1>Main</h1>
            <div>Affirmation Carousel</div>
            <div>
                {goals.map((goal) => {
                    return <Link to={`/goal/${goal.id}`}><li>{goal.name}</li></Link>
                })}
            </div>
    </div>
    )
};
export default Main;