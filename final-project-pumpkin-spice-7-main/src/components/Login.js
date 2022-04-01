import React from 'react'
import LoginForm from './LoginForm'

const Login = () => {
    return (
        <div>
            <div style={{ margin: "50px", }}>
                <h1>  <b>Login</b></h1>
                <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop: 50 }} />
                <LoginForm />
            </div>
        </div>
    )
}

export default Login