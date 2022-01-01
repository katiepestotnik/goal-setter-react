import React from "react";
import Goal from '../components/Goal'

const AllGoals = (props) => {
  return props.goals.map((goal) => <Goal goal={goal} key={goal.id} />);
};

export default AllGoals;