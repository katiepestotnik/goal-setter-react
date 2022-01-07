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
            <div className="goal">{goal?.name}</div>
            <div className="objective"> {goal?.description}</div>
            <div className="single">Start Date: {goal?.start_date}</div>
            <div className="single">Target End Date: {goal?.end_date}</div>

            <button
                className="button-style"
                onClick={(e) => props.edit(goal)}>EDIT
            </button>
            <button
                className="button-style"
                onClick={(e) => props.deleteGoal(goal)}>DELETE
            </button>
            <div><img className="status-image" src="https://h5p.org/sites/default/files/status%20update_0.jpg" alt="status updates"></img></div>
            <div>
                <Link to={`/main/goals/${id}/update`}><button className="button-style">ADD UPDATE</button></Link>
            </div>
            <div className="full-body-second" style={{marginTop: "10px"}}>
                {found.map((f) => {
                    return <div className="found-box container">
                                <div className="single">Action: {f.actions}</div>
                                <div className="single">% Goal Completed: {f.self_evaluation}</div>
                                <div className="single">Goal Completed? {f.completed ? "Yes!" : "Not Yet"}</div>
                                <div>
                                <button
                                className="special-delete"
                                onClick={(e) => props.deleteUpdate(f)}>X
                                </button></div>
                            </div> 
                })}
            </div>
            <div className="foot">Footer</div>
        </div>

    )}     

export default SingleGoal