import { get, post } from '../util/request';

export const UPDATE_FILTER_INPUT = 'UPDATE_FILTER_INPUT';
export const ADD_FILTER = 'ADD_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';
export const UPDATE_BROWSE_CARDS = 'UPDATE_BROWSE_CARDS';

const updateFilterInput = (data) => {
  return {
    type: UPDATE_FILTER_INPUT,
    data
  };
}

const addFilter = (data) => {
  if (data === '') return { type: '' };
  return {
    type: ADD_FILTER,
    data
  };
}

const deleteFilter = (data) => {
  return {
    type: DELETE_FILTER,
    data
  };
}

const updateBrowsePage = (data) => {
  return {
    type: UPDATE_BROWSE_CARDS,
    data
  };
}

// TODO: Implement stubbed
const addFilterAsync = (data) => {
  return dispatch => {
    dispatch(addFilter(data));
    get('http://swapi.co/api/planets/1/')
    .then(data => dispatch(updateBrowsePage(data)));
  };
}

export default { updateFilterInput, addFilterAsync, deleteFilter };
