const INITIAL_STATE = {
  messages: [],
  text: '',
};

const messageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_MESSAGES':
      return {
        ...state,
        messages: action.messages,
      };
    case 'UPDATE_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'INSERT_MESSAGE':
      console.log(action.message.slice(0,1))
      return {
        ...state,
        messages: [...state.messages, [parseInt(action.message.slice(0,1)),action.message.slice(1,action.message.length)]],
      };
    default:
      return state;
  }
};

export default messageReducer;