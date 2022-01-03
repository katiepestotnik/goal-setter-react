import { useState } from "react";
import { Link } from 'react-router-dom';

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
    <div>
    <form onSubmit={handleFormSubmit}>
      <label>
        Goal Name:
        <input
          type="text"
          onChange={handleChange}
          value={formData.name}
          name="name"
        />
      </label><br/>
      <label>
        Start Date:
      <input
        type="date"
        onChange={handleChange}
        value={formData.start_date}
        name="start_date"
        />
      </label><br />
      <label>
        Target End Date:
      <input
        type="date"
        onChange={handleChange}
        value={formData.end_date}
        name="end_date" 
        />
        </label><br />
        <label>
          Goal Description:
        <input
          type="text"
          onChange={handleChange}
          value={formData.description}
          name="description"
          />
        </label><br />
      <input type="submit" value={buttonLabel} />
      </form>
      <Link to="/main">
        <button>Main Page</button>
      </Link>
    </div>
  );
};

export default Form;