const INITIAL_STATE = {
  listings: [],
  focus: -1
};

const adminReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USER_LISTINGS':
      return {
        ...state,
        listings: action.payload
      };
    case 'SET_FOCUS':
      return {
        ...state,
        focus: action.focus
      }
    default:
      return state;
  }
};

export default adminReducer;