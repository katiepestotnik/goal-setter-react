import { Link } from 'react-router-dom';

const Goal = ({goal}) => {
    return (
        <div>
            <Link to={`/main/goal/${goal.id}`}>
                <h3>{goal.name}</h3>
            </Link>
            <p>{goal.description}</p>
            <p>{goal.id}</p>
        </div>
    )
  };
  
  export default Goal