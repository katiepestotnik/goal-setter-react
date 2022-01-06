import { Link } from "react-router-dom";
const SingleGoal = (props) => {
    const id = parseInt(props.match.params.id);
    const goal = props.goals.find((goal) => goal.id === id);
    const singleUpdate = props.updates
    const single = singleUpdate.updates
    const found = single.filter((ele) => {
        return ele.goal_id === goal.id
    })
    return (
        <div className="full-body">
            <div className="goal">{goal.name}</div>
            <div className="single">Start Date: {goal.start_date}</div>
            <div className="single">Target End Date: {goal.end_date}</div>
            <div className="objective"> {goal.description}</div>
            <button
                className="button-style"
                onClick={(e) => props.edit(goal)}>EDIT
            </button>
            <button
                className="button-style"
                onClick={(e) => props.deleteGoal(goal)}>X
            </button>
            <div className="goal">Status Updates</div>
            <div>
                <Link to={`/main/goals/${id}/update`}><button className="button-style">ADD UPDATE</button></Link>
                <Link to={`/main`}><button className="button-style">BACK</button></Link>
            </div>
            <div className="full-body" style={{marginTop: "10px"}}>
                {found.map((f) => {
                    return <div className="found-box container">
                                <div className="single">Action: {f.actions}</div>
                                <div className="single">% Goal Completed: {f.self_evaluation}</div>
                        {/* <div>Goal Completed? {f.completed ? "true" : "false"}</div> */}
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