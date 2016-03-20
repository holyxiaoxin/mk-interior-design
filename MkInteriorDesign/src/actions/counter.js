export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
increment = () => {
  return {
    type: INCREMENT_COUNTER
  };
}

export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
decrement = () => {
  return {
    type: DECREMENT_COUNTER
  };
}

incrementIfOdd = () => {
  return (dispatch, getState) => {
    const { counter } = getState();

    if (counter.count % 2 === 0) {
      return;
    }

    dispatch(increment());
  };
}

incrementAsync = (delay) => {
  delay = delay || 1000;
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, delay);
  };
}

export default { increment, decrement, incrementIfOdd, incrementAsync };
