import { Link } from "react-router-dom";
import Update from '../components/Update';
const SingleGoal = (props) => {
    const id = parseInt(props.match.params.id);
    const goal = props.goals.find((goal) => goal.id === id);
    const singleUpdate = props.updates
    const single = singleUpdate.updates
    console.log(single)
    const found = single.filter((ele) => {
        return ele.goal_id === goal.id
    })
    console.log(id)
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
            <Link to="/main"><button>Back</button></Link><br /><br />
            <h3>Status Updates</h3>
            <div className="found-box">
                {found.map((f) => {
                    return <><div>Actions Taken: {f.actions}</div>
                        <div>Score Update: {f.self_evaluation}</div>
                        <div>Goal Completed? {f.completed ? "true" : "false"}</div>
                        <div>Goal ID # {f.goal_id}</div>
                                <button
                onClick={(e) => props.deleteUpdate(found)}>Delete
                            </button></>
                })}
            </div>
            <Link to={`/main/goals/${id}/update`}><button>Add Update</button></Link>
        </div>

    )}     

export default SingleGoal