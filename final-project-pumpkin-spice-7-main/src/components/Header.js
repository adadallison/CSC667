import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut} from "../redux/actions/loginActions"
import { useDispatch } from 'react-redux'
import '../css/header.css'
import logo from '../images/logo.png'


const Header = (props) => {

    const headerStyle = {           // CSS of the header
        backgroundColor:"#D2D8B3",
        width:"100%",
        height:150,
        display:'grid',
        gridTemplateColumns:'5fr 1fr 1fr 1fr'
    }

     // navigation with the buttons
    const dispatch = useDispatch();

    const navigate =  useNavigate();

    const onClickProfile = () => {
        navigate(`/admin`);
    }

    const onClickHome = () => {
        navigate(`/home`);
    }
    const onClickRegister = () => {
        navigate(`/register`);
    }
    
    const onClickLogin = () => {
        if(props.user)
        {
            dispatch(logOut())
        }
        navigate(`/login`);
    }


    // This is just a basic header, feel free to add anything you like
    return (

        <header className="main-header">
        <div className="container">
        <h1>
        <img src={logo} width="100" height="100" alt="logo" onClick={onClickHome}>

        </img>
        </h1>

        <nav className="main-nav">
            <ul className="main-nav-list">
                <li  onClick={onClickHome}>
					Home
				</li>

                

                <li onClick={onClickLogin} >
                    {props.user ? 'Signout' : 'Login' }
                    {console.log(props.user)}
				</li>

                <li onClick={onClickRegister} >
                    Register
				</li>
                
                <li onClick={onClickProfile} Profile>
				    Profile
				</li>



            </ul>


        </nav>

        </div>
           
    </header>

        // <div style={headerStyle}>
        //     <div style={{margin:100,marginTop:50,fontSize:36,textAlign:'left'}} onClick={onClickHome}>
        //         Home
        //     </div>
        //     <div style={{margin:100,marginTop:50,fontSize:36,textAlign:'right'}} onClick={onClickProfile}>
        //         Profile
        //     </div>

        //     <div style={{margin:100,marginTop:50,fontSize:36,textAlign:'right'}} onClick={onClickLogin}>
        //        {props.user ? 'Signout' : 'Login' }
        //         {console.log(props.user)}
        //     </div>
        //     <div style={{margin:100,marginTop:50,fontSize:36,textAlign:'right'}} onClick={onClickRegister}>
        //         Register
        //     </div>

        // </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        user: state.loginReducer.userState

    }
}

export default connect(mapStatetoProps)(Header)