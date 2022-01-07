import { useState, useContext} from 'react';
import { Context } from "../Global";

const Login = (props) => {
    //global state
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
        fetch(`${state.url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${state.token}`
            },
            body: JSON.stringify({ username, password, email })
        }).then(response => response.json()).then(data => {
            //store token for refresh
            window.localStorage.setItem("token", JSON.stringify(data.token));
            setState({ ...state, token: data.token });
            setForm({
                username: '',
                password: '',
                email: ''
            });
            props.history.push('/main')
        });
    }
    return (
        <div>
            <div  className='input-box'>
                <div className='second-title'>LOGIN</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text" name="username" value={form.username}
                            onChange={handleChange} className='input-style'
                            placeholder='name'>
                        </input>
                    </div>
                    <div>
                        <input
                            type="password" name="password" value={form.password}
                            onChange={handleChange}
                            className='input-style'
                            placeholder='password'>
                        </input>
                    </div>
                    <div>
                        <input
                            type="email" name="email" value={form.email}
                            onChange={handleChange}
                            className='input-style'
                            placeholder='email'>
                        </input>
                    </div>
                    <input
                        className='button-style'
                        type="submit"
                        value="LOGIN">
                </input>
            </form>
            </div>
            <div><img className="home-image" src="https://images.unsplash.com/photo-1497561813398-8fcc7a37b567?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1Y2Nlc3N8ZW58MHx8MHx8&w=1000&q=80" alt="success"/></div>
    </div>)
};
export default Login;