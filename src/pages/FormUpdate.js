//current problem, cannot add update not pulling the correct goal id

import { Link } from 'react-router-dom';
import { useState } from 'react';
const FormUpdate = ({ initialUpdate, handleSubmit, buttonLabel, history, goals }) => {
  const goal = goals.find((g) => g.goal_id === goals.goal_id);
    const [formData, setFormData] = useState(initialUpdate);
    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleFormSubmit = (e) => {
      e.preventDefault();
      console.log(goal.id)
      handleSubmit(formData);
        history.push("/main");
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
            />
          </label><br />
        <label>
          Goal Achieved?
          <input
            type="checkbox"
            onChange={handleChange}
            value={formData.completed?"true":"false"}
            name="completed" 
            />
          </label><br />
          <label>
            Goal ID #
            <input
              readOnly
              placeholder={goal.id}
              type="number"
              onChange={handleChange}
              value={formData.goal_id}
              name="goal_id"
            />
          </label><br />
      <input type="submit" value={buttonLabel} />
      </form>
        <Link to="/main/">
        <button>Main Page</button>
      </Link>   
        </div>)
}
export default FormUpdate;