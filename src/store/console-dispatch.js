/** @format */
export const consoleDispatcher = next => (reducer, initialState) => {
  const store = next(reducer, initialState);

  if ('undefined' === typeof window) {
    return store;
  }

  const dispatch = action => {
    return store.dispatch(action);
  };

  Object.assign(window, store, { dispatch });

  Object.defineProperty(window, 'state', {
    enumerable: true,
    get: () => store.getState(),
  });

  return {
    ...store,
    dispatch,
  };
};

export default consoleDispatcher;
