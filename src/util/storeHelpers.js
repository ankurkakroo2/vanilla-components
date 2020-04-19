let dispatch = {};
let observable = {};

const storeHelpers = {
  set: (ds, ob) => {
    dispatch = ds;
    observable = ob;
  },
  getDispatch: () => dispatch,
  getObservable: () => observable
};

Object.freeze(storeHelpers);

export default storeHelpers;
