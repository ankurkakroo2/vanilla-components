import styles from "./CardList.css";
import Card from "../Card";

const getCards = (todos, prevId = "") => {
  //TODO: think of a better way
  let cards = "";
  let currId = "";
  for (let i = 0; i < todos.length; i++) {
    currId = prevId ? `${prevId}-${i}` : String(i);
    const currentItem = todos[i];
    cards += Card(currentItem.desc, {
      attr: currId,
      type: "small",
      variation: "secondary"
    });
    if (currentItem.todos) {
      cards += getCards(currentItem.todos, currId);
    }
  }
  return `<ul class="${styles.list}"> ${cards} </ul>`;
};

const CardList = todos => {
  return `${getCards(todos)}`;
};

export default CardList;
