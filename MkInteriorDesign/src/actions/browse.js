import { get, post } from '../util/request';

export const ON_CHANGE_FILTER_INPUT = 'ON_CHANGE_FILTER_INPUT';
export const ADD_FILTER = 'ADD_FILTER';
export const DELETE_FILTER = 'DELETE_FILTER';
export const ON_CHANGE_SLIDER = 'ON_CHANGE_SLIDER';
export const UPDATE_BROWSE_CARDS = 'UPDATE_BROWSE_CARDS';

const onChangeFilterInput = (data) => {
  return {
    type: ON_CHANGE_FILTER_INPUT,
    data
  };
}

const addFilter = (data) => {
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

const onChangeSlider = (data) => {
  return {
    type: ON_CHANGE_SLIDER,
    data
  }
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
    if (!data) return; // do nothing if filterInput is empty
    dispatch(addFilter(data));
    get('http://swapi.co/api/planets/1/')
    .then(data => dispatch(updateBrowsePage(data)));
  };
}

export default { onChangeFilterInput, addFilterAsync, deleteFilter, onChangeSlider };
