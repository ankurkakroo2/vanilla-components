import AddCard from "../molecules/AddCard/AddCard";
import CardList from "../molecules/CardList";

const Todo = ({ todos } = {}) => {
  document.querySelector("#app").innerHTML = `
  <div>
  <h1>My Todo List</h1>
  ${AddCard()}
  ${todos ? CardList(todos) : ""}
  </div>
 `;
};

export default Todo;
