//import dependencies
import { useState } from "react";
import Goal from "../components/Goal";
import { Link } from "react-router-dom"

const AllGoals = (props) => {
  return props.goals.map((goal) => <Goal goal={goal} key={goal.id} />);
};

export default AllGoals;
