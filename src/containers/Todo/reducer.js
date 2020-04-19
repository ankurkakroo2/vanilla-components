let temp = [
  {
    id: 0,
    desc: "card0",
    todos: [
      {
        desc: "card0.0",
        todos: [
          {
            desc: "card0.0.0"
          }
        ]
      },
      {
        desc: "card1.2",
        todos: [
          {
            desc: "card1.2.1"
          },
          {
            desc: "card1.2.2"
          }
        ]
      },
      {
        desc: "card1.3"
      }
    ]
  },
  {
    id: 1,
    desc: "card2",
    todos: [
      {
        desc: "card2.1",
        todos: [
          {
            desc: "card2.1.1"
          },
          {
            desc: "card2.1.2"
          }
        ]
      },
      {
        desc: "card2.1"
      }
    ]
  },
  {
    id: 2,
    desc: "card3"
  }
];
const addChildItem = (state, payload, idx = 0) => {
  const ref = payload.parent.split("-");
  console.log("ref", ref);
  if (ref.length === 1) {
    if (!state[ref[0]].todos) state[ref[0]].todos = [];
    state[ref[0]].todos.push(payload.item);
  } else {
    //TODO: Revisit
    if (idx <= ref.length) {
      addChildItem(state.todos ? state.todos : state[idx], payload, ++idx);
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
      // const obj = {
      //   parent: "0-0-0",
      //   item: {
      //     desc: "Ankur Kakroo"
      //   }
      // };
      addChildItem(state.todos, payload);
    }
    // state.todos[ref[0]].todos[ref[1]].todos[ref[2]].todos = [];
    // temp[location[0]].todos[ref[1]].todos[ref[2]].todos.push(payload.item);

    return state;
  }
};

export default reducer;
