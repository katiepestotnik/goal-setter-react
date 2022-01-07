import { Link } from 'react-router-dom';
import { Context } from "../Global";
import { useContext} from 'react';
const Header = (props) => {
    const [state, setState] = useContext(Context);
    const logout = <Link to="/">
    <button className="button-style" onClick={() => {
        window.localStorage.removeItem("token")
        setState({...state, token:null})
    }}>
        LOGOUT
        </button>
</Link>
    return (
        <div>
            <nav className='nav-header'>
                <div className='title'>THE DREAM ACHIEVER</div>
                <Link to="/">{state.token ? logout : null}</Link>
            </nav>
        </div>
    );
};
export default Header;