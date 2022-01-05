// boolean problem possible as well
//refresh problem: logic to push to login when token is null

import { Link } from 'react-router-dom';
import { useState } from 'react';
const FormUpdate = ({ initialUpdate, handleSubmit, buttonLabel, history, match }) => {
  const id =match.params.id
  const [formData, setFormData] = useState({
        actions: "",
        self_evaluation: "",
        completed: "",
        goal_id: id
    });
  
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      handleSubmit(formData);
      console.log(formData)
        history.push(`/main/goal/${id}`);
      };
    return (
      <div>
         <form onSubmit={handleFormSubmit}>
          <label>
            Describe Action Taken to achieve this goal.
            <input
              type="text"
              onChange={handleChange}
              value={formData.actions}
              name="actions"
            />
          </label><br/>
          <label>
            Give yourself a score between 1 - 10.
            <input
              type="number"
              onChange={handleChange}
              value={formData.self_evaluation}
              name="self_evaluation"
              min="1"
              max="10"
            />
          </label><br />
        {/* <label>
          Goal Achieved?
          <input
            type="checkbox"
            onChange={handleChange}
            value={formData.completed?"true":"false"}
            name="completed" 
            />
          </label><br /> */}
      <input type="submit" value={buttonLabel} />
      </form>
        <Link to="/main/">
        <button>Main Page</button>
      </Link>   
        </div>)
}
export default FormUpdate;