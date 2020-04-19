import styles from "./Button.css";

const Button = (
  children = "",
  { classes, attr = "none", variation = "primary", type = "" } = {}
) => {
  return `
  <button data-ng=${attr} class="${styles.base} ${styles[variation]} ${
    styles[type]
  } ${classes}" > ${children} </button>`;
};

export default Button;
