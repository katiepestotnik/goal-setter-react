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
                <div className='title-second'>LOGIN</div>
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
            <div className="login-image"></div>
    </div>)
};
export default Login;