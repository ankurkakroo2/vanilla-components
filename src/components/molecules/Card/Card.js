import Button from "../../atoms/Button";

const Card = (content = "a card", buttonProps) => {
  return `<li> ${content}  ${Button("add", buttonProps)} </li>`;
};

export default Card;
