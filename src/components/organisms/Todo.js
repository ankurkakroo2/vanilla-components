import actions from "../../lib/actions";
import AddCard from "../molecules/AddCard/AddCard";
import CardList from "../molecules/CardList";
import storeHelpers from "../../util/storeHelpers";

const Todo = ({ todos } = {}) => {
  document.querySelector("#app").innerHTML = `
  <div>
  <h1>My Todo List</h1>
  ${AddCard()}
  ${todos ? CardList(todos) : ""}
  </div>
 `;

  const $btns = document.getElementsByClassName("todoAdd"); //TODO: FIND BETTER PLACE
  if ($btns && $btns[0]) {
    $btns[0].onclick = () => {
      storeHelpers.getDispatch()(
        actions.addItem({
          parent: $btns[0].getAttribute("data-ng"),
          item: {
            desc: document.getElementsByClassName("AddCardInput")[0].value
          }
        })
      );
    };
  }

  const $btns2 = document.getElementsByClassName("cardAdd"); //TODO: FIND BETTER PLACE
  if ($btns2 && $btns2[0]) {
    for (let i = 0; i < $btns2.length; i++) {
      $btns2[i].onclick = () => {
        storeHelpers.getDispatch()(
          actions.addItem({
            parent: $btns2[i].getAttribute("data-ng"),
            item: {
              desc: "Child"
            }
          })
        );
      };
    }
  }
};

export default Todo;
