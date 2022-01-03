import React from "react";
import Goal from '../components/Goal'
import { Link } from 'react-router-dom';

const AllGoals = (props) => {
  return (
    <div>
    <h1>All Goals</h1>
      {props.goals.map((goal) => <Goal goal={goal} key={goal.id} />)}
      <Link to="/main/new"><button>Create New Goal</button></Link>
    </div>);
};

export default AllGoals;