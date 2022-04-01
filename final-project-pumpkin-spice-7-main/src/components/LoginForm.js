import React from 'react'
import { useState } from 'react'
 import { connect } from 'react-redux'
import { login } from '../redux/actions/loginActions'
import { useDispatch } from 'react-redux'


const LoginForm = (props) => {

    const formStyle = {
        margin: 25,
        marginLeft: 0,
        display: "grid",
        gridTemplateColumns: "150px 200px",
        gridGap: "15px"
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();

        const userTester = username;
        const passwordTester = password;

        dispatch(login(userTester,passwordTester));

        event.target.username.value = ""
        event.target.password.value = ""
        setUsername("");
        setPassword("");

    }

    return (
        <div>
            <form onSubmit={onSubmit} style={formStyle}>
                <label name="username">Username: </label>
                <input type="text" required name="username" onChange={event => setUsername(event.target.value)}></input>
                <label name="password">Password: </label>
                <input type="password" required name="password" onChange={event => setPassword(event.target.value)}></input>
                <input type="submit" style={{ gridColumn: "2", width: 100, justifySelf: "right" }} value="Login" />
            </form>
        </div>
    )
}

export default LoginForm