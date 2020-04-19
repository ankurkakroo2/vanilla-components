import TodoReducer from "../containers/Todo/reducer";

export default {
  initApp: ({ ...state }) => state,
  ...TodoReducer
};
