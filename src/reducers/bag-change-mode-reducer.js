const bagChangeModeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CHANGE_MODE':
      return Object.assign({}, state, {
        mode: action.mode
      });
    default:
      return state;
  }
};

export default bagChangeModeReducer;