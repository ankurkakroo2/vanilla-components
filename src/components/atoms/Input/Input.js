import styles from "./Input.css";

const Input = ({ type = "text", classes = "", placeholder = "Enter" } = {}) => {
  return `<input type=${type} placeholder=${placeholder} class="${
    styles.base
  } ${classes}" />`;
};

export default Input;
