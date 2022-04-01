import axios from 'axios';

export const getUsers = () => async dispatch => {
    // aynsc call in order to call a dispatch
    try {
        const res = await axios.get(`/api/login`)
        console.log(res.data)
        // this is what sends the data to the reducer
        return dispatch({
            type: "GET_USERS",
            payload: res.data
        })
    }
    catch (e) {
        console.log(e)
    }
};

export const login = (username, password) => async dispatch => {

    try {
        const res = await axios.get(`/api/login/login?username=${username}&password=${password}`)
        if (res.data !== 'invalid') {
            console.log("ACTION: USER IS LOGGED IN")
            console.log(res.data)

            dispatch( {
                type: "LOGIN",
                username: username,
                password: password,
            })

        } else {
            console.log("ACTION: ERROR ")
        }
    }
    catch (e) {
        console.log(e)
    }

}

export const register = (username, password) => async dispatch => {

    try {
        const res = await axios.get(`/api/login/register?username=${username}&password=${password}`)
        if (res.data !== 'invalid') {
            console.log("ACTION: USER HAS REGISTERED")
            console.log(res.data)

            dispatch( {
                type: "REGISTER",
                username: username,
                password: password,
            })

        } else {
            console.log("ACTION: ERROR ")
        }
    }
    catch (e) {
        console.log(e)
    }

}

export const logOut = () => async dispatch => {

    try {
        dispatch({
            type: "LOGOUT"
        })
    }
    catch (e) {
        console.log(e)
    }

}


// export const submitMessage = () => (dispatch, getState) => {
//   axios.post('/messanger/postMessage', { message: getState().messageReducer.text })
//     .then(() => { })
//     .catch(e => console.log(e));
//   dispatch(handlTextChange(''));
// };