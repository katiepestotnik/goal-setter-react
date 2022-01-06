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
        <div className='nav-background'>
            <nav className='header-nav'>
                <div className='title'>The Dream Achiever</div>
                <Link to="/">{state.token ? logout : null}</Link>
            </nav>
        </div>
    );
};
export default Header;