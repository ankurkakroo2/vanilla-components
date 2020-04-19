import AddCard from "../components/molecules/AddCard";
import Card from "../components/molecules/Card";

const bindEvents = () => {
  //TODO: Not an elegant way. Think more!
  AddCard.init();
  Card.init();
};

export default bindEvents;
