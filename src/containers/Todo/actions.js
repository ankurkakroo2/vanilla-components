//TODO: Find a way to namespace actions to avoid duplication
const addItem = data => ({
  type: "addItem",
  ...data
});

const deleteItem = data => ({
  type: "deleteItem",
  ...data
});

export default { addItem, deleteItem };
