import "./tokens";
import "./styles.css";
import Todo from "./components/organisms/Todo";
import Store from "./lib/store";
import reducers from "./lib/reducers";
import actions from "./lib/actions";
import storeHelpers from "./util/storeHelpers";
import bindEvents from "./lib/events";

const { dispatch, observable } = Store({
  reducers: reducers,
  actions: actions
});

storeHelpers.set(dispatch, observable);

storeHelpers.getObservable().subscribe("stateChange", state => {
  Todo(state);
  bindEvents();
});

dispatch(actions.initApp()); // Better composition for dispatch
