/**
 * print action and state
 */
const logger = ({ getState, dispatch }) => next => action => {
    console.group(action.type); // grouping relevant log info
    console.log("dispatching: ", action);
    const result = next(action);
    console.log("next state: ", getState());
    console.groupEnd();
    return result;
}

export default logger;