import { Link } from 'react-router-dom';

const Goal = ({ goal }) => {
    return (
        <div>
            <Link to={`/main/goal/${goal.id}`}>
            <div className='goal'>{goal.name}</div>
            </Link>
        </div>
    )
  };
  
  export default Goal