import { useState, useContext, useEffect } from 'react';
import { Context } from "../Global";


const Login = (props) => {
    useEffect(() => {
        const token = localStorage.getItem("token")
        console.log(token)
        if (token) {
        fetch(`${state.url}/auto_login`, {
            headers: {
            Authorization: `Bearer ${token}`
            }
        }).then(response => response.json()).then(data => {
        console.log(data)
        })
        };
    }, []);
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
            <div>
                <h3>Login to your Account</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label for="CreateUsername">Username</label>
                        <input
                            type="text" name="username" value={form.username}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div>
                        <label for="CreatePassword">Password</label>
                        <input
                            type="password" name="password" value={form.password}
                            onChange={handleChange}>
                        </input>
                    </div>
                    <div>
                        <label for="CreateEmail">Email</label>
                        <input
                            type="email" name="email" value={form.email}
                            onChange={handleChange}>
                        </input>
                    </div>
                <input
                type="submit" value="LOGIN">
                </input>
            </form>
    </div>
    </div>)
};
export default Login;