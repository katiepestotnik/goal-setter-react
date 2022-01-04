const Update = ({ update }) => {

    return (
        <div>
            <div>Actions Taken: {update.actions}</div>
            <div>Score Update: {update.self_evaluation}</div>
            <div>Goal Completed?</div>
        </div>)
}
export default Update