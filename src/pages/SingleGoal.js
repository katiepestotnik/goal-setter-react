const SingleGoal = (props) => {
  const id = parseInt(props.match.params.id);
  const goal = props.goals.find((goal) => goal.id === id);
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