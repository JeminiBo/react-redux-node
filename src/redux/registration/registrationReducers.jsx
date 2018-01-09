const defaultState = {
  users: [],
  currentUser: null
}

const registrationReducer = function (state = defaultState, action) {
  switch (action.type) {
    case 'ADD_USER':
      return registrationUserHandler(state, action.payload);
    case 'LOGIN':
      return loginUserHandler(state, action.payload);
    case 'LOGOUT':
      return logoutUserHandler(state);
    default: return state;
  }
};

function registrationUserHandler(state, userLogin) {
  let updatedUsers = state.users.slice(0);
  updatedUsers.push(userLogin);
  return {
    ...state,
    users: updatedUsers
  }
}

function loginUserHandler(state, userLogin) {                 
  return {
    ...state,
    currentUser: userLogin
  } 
}

function logoutUserHandler(state) {
  if(state.currentUser) {
    return {
      ...state,
      currentUser: null
    }
  }
    else
      return state; 
}

export default registrationReducer;
