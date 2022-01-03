import { Link } from 'react-router-dom';

const Goal = ({goal}) => {
    return (
        <div>

            <Link to={`/main/goal/${goal.id}`}>
            <h3>Goal: {goal.name}</h3>
            </Link>

            <div>Start Date: {goal.start_date}</div>
            <div>End Date: {goal.end_date}</div>
            <p>Description: {goal.description}</p><br />
            <div>Goal Reference #{goal.id}</div>

        </div>
    )
  };
  
  export default Goal