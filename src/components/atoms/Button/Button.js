import styles from "./Button.css";

const Button = (text = "I dont know", { onClick, attr } = {}) => {
  // const $btn = document.querySelector('[data-ng="add"]');

  // if ($btn)
  //   $btn.onclick = () => {
  //     console.log("ankut");
  //   };
  return `<button data-ng=${attr} class="${styles.base}" > ${text} </button>`;
};

export default Button;
