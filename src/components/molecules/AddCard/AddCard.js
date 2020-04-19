import styles from "./AddCard.css";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import storeHelpers from "../../../util/storeHelpers";

const AddCard = () => {
  const observable = storeHelpers.getObservable();
  const $addCard = `
  <div class=${styles.base}>
  ${Input({ classes: "AddCardInput" })} 
  ${Button("Add", { classes: "todoAdd", attr: "root" })}
  </div>`;

  observable.subscribe("stateChange", () => {
    console.log("other called");
  });
  return $addCard;
};

export default AddCard;
