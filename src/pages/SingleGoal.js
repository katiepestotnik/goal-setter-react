import { Link } from "react-router-dom";
import Update from '../components/Update';
const SingleGoal = (props) => {
  const id = parseInt(props.match.params.id);
    const goal = props.goals.find((goal) => goal.id === id);
    console.log(props.updates.updates)
  return (
      <div>
        <h1>Goal: {goal.name}</h1>
        <div>Target Start Date: {goal.start_date}</div>
        <div>Target End Date: {goal.end_date}</div>
        <p>Description: {goal.description}</p>
        <div>Goal Id: {goal.id}</div>
        <button
            onClick={(e) => props.edit(goal)}>Edit
        </button>
        <button
            onClick={(e) => props.deleteGoal(goal)}>Delete
        </button>
          <Link to="/main"><button>Back</button></Link><br/><br/>
          <h1>Status Updates:</h1>
        <li>
          {props.updates.updates.map((update) => <Update update={update} key={update.id} />)}</li>
    </div>)
}
export default SingleGoal