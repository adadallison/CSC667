import axios from 'axios';

export const updateMessages = messages => {
  console.log("UPDATING MESSAGES: " + messages)
  return {
    type: 'UPDATE_MESSAGES',
    messages,
  };
};

export const insertMessage = message => {
  console.log('inserting message')
  
  return {
    type: 'INSERT_MESSAGE',
    message,
  };
};

export const handlTextChange = text => {
  console.log("UPDATING TEXT")
  return {
    type: 'UPDATE_TEXT',
    text,
  };
};


export const submitMessage = (listingId,id,user) => (dispatch, getState) => {
  console.log("SUBMITTING MESSAGE: " + user)
  axios.post('/messanger/postMessage', { message: getState().messageReducer.text,listingId: listingId,id: id,user:user })
    .then(() => { })
    .catch(e => console.log(e));
  dispatch(handlTextChange(''));
};