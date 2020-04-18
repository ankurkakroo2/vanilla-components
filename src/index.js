import "./styles.css";
import Todo from "./components/organisms/Todo";
//import Observable from "./lib/rx";
import Store from "./lib/store";
import reducers from "./lib/reducers";
import actions from "./lib/actions";

const { dispatch, observable } = Store({
  initialState: {
    todos: [
      {
        desc: "card1",
        todos: [
          {
            desc: "card1.1"
          }
        ]
      },
      {
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
      }
    ]
  },
  mutations: reducers,
  actions: actions
});

observable.subscribe("stateChange", Todo);

Todo([
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
]);

// dispatch(
//   actions.addItem({
//     desc: "Akshay"
//   })
// );

const $btn = document.querySelector('[data-ng="add"]');
if ($btn)
  $btn.onclick = () => {
    dispatch(
      actions.addItem({
        name: "chassi"
      })
    );
  };
