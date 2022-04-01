const INITIAL_STATE = {
    users: [],
    username: "",
    password: "",
    userState: false,
  };
  
  const loginReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'GET_USERS':
        return {
          ...state,
          users: action.payload
        };
        case "LOGIN":
            return {
                ...state,
                username: action.username,
                password: action.password,
                userState: true,
            };
        case "REGISTER":
            return {
                ...state,
                username: action.username,
                password: action.password
            }
        case "LOGOUT":
            return {
                ...state,
                userState: false,
                username: "",
                password: "",
            }
      default:
        return state;
    }
  };

  
  export default loginReducer;