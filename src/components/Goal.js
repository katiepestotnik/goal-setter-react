import { Link } from 'react-router-dom';

const Goal = ({ goal }) => {
    const end = goal.end_date
    const start = goal.start_date
    return (
        <div>

            <Link to={`/main/goal/${goal.id}`}>
            <h3>Goal: {goal.name}</h3>
            </Link>
            <p>Description: {goal.description}</p><br />
            <div>Start Date: {start}</div><br/>
            <div>End Date: {end}</div><br/>

            <div>Goal Reference #{goal.id}</div><br/>

        </div>
    )
  };
  
  export default Goal