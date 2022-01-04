const Update = ({ update }) => {
    return (
        <div>
            <div>Actions Taken: {update.actions}</div>
            <div>Score Update: {update.self_evaluation}</div>
            <div>Goal Completed? {update.completed ? "true" : "false"}</div>
            <div>Goal ID {update.goal_id}</div>
        </div>)
}
export default Update