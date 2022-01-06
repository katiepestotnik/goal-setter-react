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
            <div>
                <div className="intro">Achieving dreams with a few goals...</div>
                <div className="intro">Focus on the goal not the task.<br/> You can start programming a better life for yourself with a few goals.</div>
            </div>
            <div className="link-box">
                <li className="link-style">
                    <Link
                        to="login"><div className="link-font">LOGIN</div>
                    </Link>
                </li>
                <li className="link-style">
                    <Link
                        to="signup"><div className="link-font">REGISTER</div>
                    </Link>
                </li>
            </div>
        </div>
    );
};
export default Home;