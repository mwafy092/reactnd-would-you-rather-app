const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action:', action);
  const nextAction = next(action);
  console.log('The new state:', store.getState());
  console.groupEnd();
  return nextAction;
};

export default logger;
