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
        <div className="full-body">
            <div>
                <div className="intro">Achieving dreams with a few goals...</div>
                <div className="intro">Focus on the goal not the task.<br/>Start programming a better life for yourself.</div>
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
            <div>
                <img className="home-image" src="https://media.istockphoto.com/vectors/dream-big-silhouette-of-man-with-raised-arms-looking-at-the-open-to-vector-id1252341000?k=20&m=1252341000&s=612x612&w=0&h=F-pFF46SoeCsUVO0HMzhH6W6tBOVRH_1L2x87bgvDiI=" alt="dream"/>
            </div>
        </div>
    );
};
export default Home;