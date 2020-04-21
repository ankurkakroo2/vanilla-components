const addChildItem = (state, payload, ref, idx = 0) => {
  //TODO: First pass- Revisit this function to improve this
  if (ref.length === 1) {
    const currState = state[ref[0]];
    if (!currState.todos) currState.todos = [];
    currState.todos.push(payload.item);
  } else {
    if (idx < ref.length) {
      const currState = state[ref[idx]];
      if (!currState.todos) currState.todos = [];
      addChildItem(currState.todos, payload, ref, ++idx);
    } else {
      state.push(payload.item);
    }
  }
};

const reducer = {
  addItem: ({ ...state }, payload) => {
    // state is mutating. Fix this.
    const ref = payload.parent.split("-");

    if (payload.parent === "root") {
      if (!state.todos) {
        state.todos = [];
      }
      state.todos.push(payload.item); //TODO: Better code here
    } else {
      addChildItem(state.todos, payload, ref);
    }

    return state;
  }
};

export default reducer;
