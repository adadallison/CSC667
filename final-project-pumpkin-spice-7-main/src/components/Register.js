import React from 'react'
import RegisterForm from './RegisterForm'

const Register = () => {
    return (
        <div>
            <div style={{ margin: "50px", }}>
                <h1>  <b>Register</b></h1>
                <hr style={{ color: "#bd9f8f", height: 5, margin: 10, marginTop: 50 }} />
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register