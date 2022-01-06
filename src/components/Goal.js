import { Link } from 'react-router-dom';

const Goal = ({ goal }) => {
    const end = goal.end_date
    const start = goal.start_date
    return (
        <div>
            <Link to={`/main/goal/${goal.id}`}>
            <div className='goal'>{goal.name}</div>
            </Link>
        </div>
    )
  };
  
  export default Goal