import { useContext, useState, useEffect } from "react";
import { Context } from "../Global";

const SingleGoal = (props) => {
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
  const id = parseInt(props.match.params.id); //get the id from url param
  const goal = goals.find((goal) => goal.id === id);
  console.log(id)
  console.log(goal)
  return (
    <div>
      <h1>{goal.name}</h1>
      <p>{goal.description}</p>
      <div>{goal.id}</div>
    </div>)
}
export default SingleGoal