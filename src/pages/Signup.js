import { useState, useContext} from 'react';
import { Context } from "../Global";

const Signup = (props) => {
    const [state, setState] = useContext(Context);
    const [form, setForm] = useState({
        username: '',
        password: '',
        email: ''
    });
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password, email } = form;
        fetch(`${state.url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({ username, password, email })
        }).then(response => response.json()).then(data => {
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data));
            setForm({
                username: '',
                password: '',
                email: ''
            });
            props.history.push('/login')
        });
    }
    return (
        <div>
            <div className='input-box'>
                <div className='second-title'>CREATE ACCOUNT</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text" name="username" value={form.username}
                            onChange={handleChange}
                            className='input-style'
                            placeholder='name'></input></div>
                    <div>
                        <input
                            type="password" name="password" value={form.password}
                            onChange={handleChange}
                            className='input-style'
                            placeholder='password'></input>
                    </div>
                    <div>
                        <input
                            type="email" name="email" value={form.email}
                            onChange={handleChange}
                            className='input-style'
                            placeholder='email'></input>
                    </div>
                    <input
                        type="submit" value="REGISTER"
                        className='button-style'></input>
                </form>
            </div>
            <div>
                <img className="home-image" src="https://www.tacresults.com/sites/default/files/images/Destiny.jpg" alt="shakespeare quote" /></div>
        </div>
    )
};
export default Signup;