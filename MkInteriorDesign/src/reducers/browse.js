import {
  ON_CHANGE_FILTER_INPUT, ADD_FILTER, DELETE_FILTER,
  ON_CHANGE_SLIDER, UPDATE_BROWSE_CARDS
} from '../actions/browse';
import Immutable from 'immutable';

const initialState = Immutable
  .fromJS({
    filter: {
      filterInput: '',
      filterTags: ['tag1', 'tag2'],
      slider: {}
    }
  });

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case ON_CHANGE_FILTER_INPUT: {
      return state.setIn(['filter', 'filterInput'], action.data);
    }
    case ADD_FILTER: {
      const newFilterTag = action.data;
      const filterTags = state.getIn(['filter', 'filterTags']).push(newFilterTag);
      return state.setIn(['filter', 'filterTags'], filterTags)
                  .setIn(['filter', 'filterInput'], '');
    }
    case DELETE_FILTER: {
      const index = action.data;
      const filterTags = state.getIn(['filter', 'filterTags']).delete(index);
      return state.setIn(['filter', 'filterTags'], filterTags)
                  .setIn(['filter', 'filterInput'], '');
    }
    case UPDATE_BROWSE_CARDS: {
      // TODO: Implement stubbed and remove log
      console.log(action.data);
      return state;
    }
    case ON_CHANGE_SLIDER: {
      const {leftValue: minValue, rightValue: maxValue} = action.data;
      const slider = Immutable.fromJS({ minValue, maxValue });
      return state.setIn(['filter', 'slider'], slider);
    }
    default:
      return state;
  }
};
