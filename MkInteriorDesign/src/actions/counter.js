export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
}

const incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.get('count') % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

const incrementAsync = (delay) => {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export default { increment, decrement, incrementIfOdd, incrementAsync };
