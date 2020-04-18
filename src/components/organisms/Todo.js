import Button from "../atoms/Button";
import Card from "../molecules/Card";
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

const Todo = allTodos => {
  const getCards = (todos, prevId = "") => {
    let cards = "";
    let currId = "";
    for (let i = 0; i < todos.length; i++) {
      currId = prevId ? `${prevId}-${i}` : String(i);
      const currentItem = todos[i];
      cards +=
        Card(currentItem.desc, {
          attr: currId
        }) + `<span>${currId}</span>`;
      if (currentItem.todos) {
        cards += getCards(currentItem.todos, currId);
      }
    }
    return `<ul> ${cards} </ul>`;
  };

  document.querySelector("#app").innerHTML = `
  <div>
  ${Button(allTodos?.data?.name, {
    onClick: () => {
      console.log();
    }
  })}
  ${getCards(allTodos)}
  </div>
 `;
};

// const addTodo = () => {
//   const obj = {
//     parent: "0-0-0",
//     item: {
//       desc: "Ankur Kakroo"
//     }
//   };
//   const location = obj.parent.split("-");
//   temp[location[0]].todos[location[1]].todos[location[2]].todos = [];
//   temp[location[0]].todos[location[1]].todos[location[2]].todos.push(obj.item);
//   console.log(temp);
//   Todo(temp);
// };

// setTimeout(() => {
//   addTodo();
// }, 3000);

export default Todo;
