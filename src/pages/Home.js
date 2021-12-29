import { Link } from "react-router-dom";
import { Context } from "../Global";
import { useContext } from "react";
const Home = (props) => {
    const [state, setState] = useContext(Context);
    <Link to="/">
        <button onClick={() => {
            window.localStorage.removeItem("token")
            setState({...state, token:null})
        }}>
            LOGOUT
        </button>
    </Link>
    return (
        <div>
            <ul>
                <li>
                    <Link
                        to="login"><h2>LOGIN</h2>
                    </Link>
                </li>
                <li>
                    <Link
                        to="signup"><h2>REGISTER</h2>
                    </Link>
                </li>
            </ul>
            <div>
                <h3>Change your life with a few goals</h3>
                <p>Focus on the goal not the task. You can start programming a better life for yourself with a few goals.</p>
            </div>
        </div>
    );
};
export default Home;