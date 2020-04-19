import TodoActions from "../containers/Todo/actions";

export default {
  initApp: () => ({
    type: "initApp"
  }),
  ...TodoActions
};
