const addChildItem = (state, payload, idx = 0) => {
  const ref = payload.parent.split("-");
  console.log("ref", ref);
  if (ref.length === 1) {
    if (!state[ref[0]].todos) state[ref[0]].todos = [];
    state[ref[0]].todos.push(payload.item);
  } else {
    //TODO: Revisit
    if (idx <= ref.length) {
      addChildItem(state[idx], payload, ++idx);
    } else {
      if (!state.todos) state.todos = [];
      state.todos.push(payload.item);
    }
  }
};
const reducer = {
  addItem: ({ ...state }, payload) => {
    console.log("abc", payload);
    if (payload.parent === "root") {
      if (!state.todos) {
        state.todos = [];
        state.todos.push(payload.item);
      } else {
        state.todos.push(payload.item); //TODO: Better code here
      }
    } else {
      addChildItem(state.todos, payload);
    }

    return state;
  }
};

export default reducer;
