import styles from "./Card.css";
import Button from "../../atoms/Button";
import actions from "../../../lib/actions";
import storeHelpers from "../../../util/storeHelpers";

const Card = (content = "a card", buttonProps) => {
  return `<li class="${styles.base}"> ${content}  ${Button("+", {
    classes: `cardAdd ${styles.add}`,
    ...buttonProps
  })} </li>`;
};

Card.init = () => {
  const $btns2 = document.getElementsByClassName("cardAdd");
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

export default Card;
