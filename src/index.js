import "./tokens";
import "./styles.css";
import Todo from "./components/organisms/Todo";
import Store from "./lib/store";
import reducers from "./lib/reducers";
import actions from "./lib/actions";
import storeHelpers from "./util/storeHelpers";

const { dispatch, observable } = Store({
  reducers: reducers,
  actions: actions
});

storeHelpers.set(dispatch, observable);

observable.subscribe("stateChange", state => {
  console.log("main calkled");
  Todo(state);
});

Todo(); //TODO: this should not be needed. trigger statechange initially
