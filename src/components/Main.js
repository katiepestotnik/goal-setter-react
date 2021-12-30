import { useEffect, useState, useContext } from 'react';
import { Context } from "../Global";
const Main = (props) => {
    const [state, setState] = useContext(Context);
    console.log(state.token)
    useEffect(() => {
        if (state.token === null || state.token === undefined) {
            alert('Login not verified: Register or Reenter Login')
            props.history.push('/')
        }
    }, []);
    return (<h1>Main</h1>)
}
export default Main