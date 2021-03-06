const pubSub = () => {
  const observers = {};

  const notify = (eventName, data) => {
    if (!Array.isArray(observers[eventName])) {
      return;
    }
    console.log(observers);

    observers[eventName].forEach(callback => {
      callback(data);
    });
  };

  const subscribe = (eventName, callback) => {
    if (!Array.isArray(observers[eventName])) {
      observers[eventName] = [];
    }
    observers[eventName].push(callback);

    const index = observers[eventName].length - 1;

    return {
      unsubscribe: () => {
        observers[eventName].splice(index, 1);
      }
    };
  };

  return {
    notify,
    subscribe
  };
};

export default pubSub;
