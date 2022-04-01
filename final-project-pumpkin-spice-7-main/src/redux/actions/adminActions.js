import axios from 'axios';

export const getUserListings = () => async dispatch => {
    // aynsc call in order to call a dispatch
    try {
        const res = await axios.get(`/api/listings`)
        console.log(res.data)
        // this is what sends the data to the reducer
        return dispatch({
            type: "GET_USER_LISTINGS",
            payload: res.data
        })
    }
    catch (e) {
        console.log(e)
    }
};

export const setFocus = (focus) => {
    console.log("ACTION")
    return {
        type: 'SET_FOCUS',
        focus
    }
};

// export const submitMessage = () => (dispatch, getState) => {
//   axios.post('/messanger/postMessage', { message: getState().messageReducer.text })
//     .then(() => { })
//     .catch(e => console.log(e));
//   dispatch(handlTextChange(''));
// };