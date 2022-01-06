// boolean problem possible as well
//refresh problem: logic to push to login when token is null
import { useState } from 'react';
const FormUpdate = ({ handleSubmit, buttonLabel, history, match }) => {
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
      history.push(`/main/goal/${id}`);
      };
    return (
      <div className="input-box full-body">
          <div className='title-second'>Update</div>
          <form onSubmit={handleFormSubmit}>
              <div className="form">Specific step taken to achieve goal</div>
              <label>
                  <input
                    type="text"
                    onChange={handleChange}
                    value={formData.actions}
                    name="actions"
                    className='input-style'
                  />
              </label><br />
              <div className="form">Percentage of goal completed</div>
              <label>
                  <input
                    type="number"
                    onChange={handleChange}
                    value={formData.self_evaluation}
                    name="self_evaluation"
                    min="0"
                    max="100"
                    className='input-style'
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
                <input
                  className="button-style"
                  type="submit"
                  value={buttonLabel}
                />
              </form> 
          </div>)
}
export default FormUpdate;