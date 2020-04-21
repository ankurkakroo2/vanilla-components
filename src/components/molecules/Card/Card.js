import styles from "./Card.css";
import Button from "../../atoms/Button";
import actions from "../../../lib/actions";
import storeHelpers from "../../../util/storeHelpers";

const Card = (content = "a card", buttonProps) => {
  return `<li class="${styles.base}"> ${content}  ${Button("+", {
    classes: `cardAdd ${styles.add}`,
    ...buttonProps
  })}</li>`;
};

Card.init = () => {
  const $addTodo = document.getElementsByClassName("cardAdd");
  if ($addTodo && $addTodo[0]) {
    for (let i = 0; i < $addTodo.length; i++) {
      $addTodo[i].onclick = () => {
        storeHelpers.getDispatch()(
          actions.addItem({
            parent: $addTodo[i].getAttribute("data-ng"),
            item: {
              desc: "Child"
            }
          })
        );
      };
    }
  }
};

export default Card;
