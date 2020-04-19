import styles from "./AddCard.css";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import actions from "../../../lib/actions";
import storeHelpers from "../../../util/storeHelpers";

const AddCard = () => {
  const $addCard = `
  <div class=${styles.base}>
  ${Input({ classes: "AddCardInput" })} 
  ${Button("Add", { classes: "todoAdd", attr: "root" })}
  </div>`;

  return $addCard;
};

const addTodo = (e, $btn, $input) => {
  const dispatch = storeHelpers.getDispatch();
  const desc = $input.value;

  if (desc) {
    const parent = $btn.getAttribute("data-ng");
    dispatch(
      actions.addItem({
        parent,
        item: {
          desc
        }
      })
    );
  } else {
    $input.focus();
  }
};

AddCard.init = () => {
  const $btns = document.getElementsByClassName("todoAdd");
  const $inputs = document.getElementsByClassName("AddCardInput");
  if ($btns && $btns[0] && $inputs) {
    const $btn = $btns[0];
    const $input = $inputs[0];
    $btn.onclick = e => addTodo(e, $btn, $input);
    $input.onkeypress = e => {
      if (e.keyCode === 13) {
        addTodo(e, $btn, $input);
      }
    };
  }
};

export default AddCard;
