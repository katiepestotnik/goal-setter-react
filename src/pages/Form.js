import { useState } from "react";
import { Link } from "react-router-dom";
const Form = ({ initialGoal, handleSubmit, buttonLabel, history}) => {
  const [formData, setFormData] = useState(initialGoal);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    history.push("/main");
  };
  return (
    <div className="input-box full-body">
        <div className='second-title'>Keeping taking steps towards growth!</div>
      <form onSubmit={handleFormSubmit}>
      <div className="form">Goal Name</div>
      <label>
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
          className='input-style'
          placeholder="Goal Name"
        />
        </label><br />
        <div className="form">Start Date</div>
      <label>
        <input
          type="date"
          onChange={handleChange}
          value={formData.start_date}
          name="start_date"
          className='input-style'
        />
        </label><br />
        <div className="form">Target End Date</div>
        <label>
          <input
            type="date"
            onChange={handleChange}
            value={formData.end_date}
            name="end_date" 
            className='input-style'
        />
        </label><br />
        <div className="form">Main Objective</div>
        <label>
        <textarea
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
          className='input-style'
          />
        </label><br />
      <input className="button-style" type="submit" value={buttonLabel} />
      </form>
      <img className="form-image" src="https://www.slideteam.net/media/catalog/product/cache/960x720/b/l/blue_letters_of_goal_with_construction_equipment_stock_photo_Slide01.jpg" alt="goal construction"></img>
      </div>
  );
};

export default Form;