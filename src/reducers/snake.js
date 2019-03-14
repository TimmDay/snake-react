const defaultState = { applesEaten: 0, mostApples: 0 };

const snakeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'INCREMENT_APPLES':
      return {
        ...state,
        applesEaten: state.applesEaten + action.n,
        mostApples: (state.mostApples < state.applesEaten + action.n) ? state.applesEaten + action.n : state.mostApples,
      };
    case 'RESET_APPLES':
    return {
      ...state,
      applesEaten: 0
    }
    default:
      return state;
  }
};
export default snakeReducer;