import styles from "./Card.css";
import Button from "../../atoms/Button";

const Card = (content = "a card", buttonProps) => {
  return `<li class="${styles.base}"> ${content}  ${Button("+", {
    classes: `cardAdd ${styles.add}`,
    ...buttonProps
  })} </li>`;
};

export default Card;
