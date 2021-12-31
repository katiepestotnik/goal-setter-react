//import dependencies
import { useState } from "react";
import {Link} from "react-router-dom"

//create a function that will take in props
function Index(props) {
  const loaded = () => {
    return <section>{props.goals.map((goal) => (
      <div key={goal._id}>
            <Link to={`/goals/${goal._id}`}>
                <h1>{goal.name}</h1>
            </Link>
      </div>
      ))
      }
      </section>
  };

  //loading function
  const loading = () => {
    return <h1>Loading..</h1>;
  };

  //want to return the title and url of new bookmark
  return (
    <section>
        {props.goals ? loaded() : loading()}
    </section>
  );
}

//export
export default Index;
