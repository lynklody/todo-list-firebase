/**
 * print action and state
 */
const logger = ({ getState, dispatch }) => next => action => {
    console.group(action.type); //分组
    console.log("dispatching: ", action);
    const result = next(action);
    console.log("next state: ", getState());
    console.groupEnd();
    return result;
}

export default logger;