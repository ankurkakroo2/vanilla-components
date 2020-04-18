import PubSub from "./rx";

const Store = ({ initialState = {}, actions, mutations } = {}) => {
  let state = initialState;
  const events = PubSub();

  const getState = () => {
    return state;
  };

  const dispatch = ({ type, ...data }) => {
    if (typeof actions[type] !== "function") {
      console.error(`Action "${type} doesn't exist.`);
      return false;
    }
    console.groupCollapsed(`ACTION: ${type}`);
    console.log(actions[type](data)); // key is needed here so that multiple keys can be supported
    setState(type, data);
    console.groupEnd();
    return true;
  };

  const setState = (key, payload) => {
    if (typeof mutations[key] !== "function") {
      console.log(`State "${key}" doesn't exist`);
      return false;
    }
    let newState = mutations[key](state, payload);
    state = Object.assign({}, state, newState);
    events.notify("stateChange", state); //TODO: action name should be dynamic
    console.log(`Updated State`, state);
    return true;
  };

  return {
    dispatch,
    getState,
    setState,
    observable: events
  };
};

export default Store;
