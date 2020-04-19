//TODO: Find a way to namespace actions to avoid duplication
const addItem = data => ({
  type: "addItem",
  ...data
});

export default { addItem };
