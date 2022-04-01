import React from 'react'
import { useState } from 'react'
// import { login } from '../../redux/actions/loginAction'
// import { resetTask} from '../../redux/actions/listActions'
 import { connect } from 'react-redux'
//import { useHistory } from 'react-router-dom'
import { register } from '../redux/actions/loginActions'
import { useDispatch } from 'react-redux'


const RegisterForm = (props) => {

    const formStyle = {
        margin: 25,
        marginLeft: 0,
        display: "grid",
        gridTemplateColumns: "150px 200px",
        gridGap: "15px"
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

   // const history = useHistory();
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        event.preventDefault();

        const userTester = username;
        const passwordTester = password;

        dispatch(register(userTester,passwordTester));

        //             history.push('/')                    do this all in the middleware
        //         } else {
        //             console.log("WRONG")
        //             toast.warn('username and/or password was incorrect',{position: toast.POSITION.TOP_CENTER})

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

export default RegisterForm