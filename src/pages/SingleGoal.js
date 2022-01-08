import { Link } from "react-router-dom";
import { Context } from "../Global";
import { useContext, useEffect } from "react";
const SingleGoal = (props) => {
    const [state, setState] = useContext(Context);
    const { url, token } = state;
    if (!token) {
        props.history.push('/')
    }
    const id = parseInt(props.match.params.id);
    const goal = (props.goals).find((goal) => goal.id === id);
    const singleUpdate = props.updates
    const single = singleUpdate.updates
    const found = (single || []).filter((ele) => {
        return ele.goal_id === goal.id
    })
    return (
        <div className="full-body">
            <div className="single">
            <div>{goal?.name}</div>
            <div>Objective: {goal?.description}</div>
            <div>Start Date: {goal?.start_date}</div>
            <div>Target End Date: {goal?.end_date}</div>
            </div>
            <button
                className="button-style all-button"
                onClick={(e) => props.edit(goal)}>EDIT
            </button>
            <button
                className="button-style all-button"
                onClick={(e) => props.deleteGoal(goal)}>DELETE
                </button>
            <div><img className="status-image" src="https://h5p.org/sites/default/files/status%20update_0.jpg" alt="status updates"></img></div>
            <div>
                <Link to={`/main/goals/${id}/update`}><button className="button-style">ADD UPDATE</button></Link>
            </div>
            <div>
                <Link to={`/main/`}><button className="button-style">BACK</button></Link>
            </div>
            <div className="full-body update-box">
                {found.map((f) => {
                    return <div className="update">
                                <div>Action: {f.actions}</div>
                                <div>% Goal Completed: {f.self_evaluation}</div>
                                <div>Goal Completed? {f.completed ? "Yes!" : "Not Yet"}</div>
                                <div>
                                <button
                                className="special-delete"
                                onClick={(e) => props.deleteUpdate(f)}>X
                                </button></div>
                            </div> 
                })}
            </div>
        </div>

    )}     

export default SingleGoal