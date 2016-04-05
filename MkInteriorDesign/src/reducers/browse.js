import { UPDATE_FILTER_INPUT, ADD_FILTER, DELETE_FILTER, UPDATE_BROWSE_CARDS } from '../actions/browse';
import Immutable from 'immutable';

const initialState = Immutable
  .fromJS({
    filterInput: '',
    filterTags: ['tag1', 'tag2']
  });

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FILTER_INPUT: {
      return state.set('filterInput', action.data);
    }
    case ADD_FILTER: {
      const newFilterTag = action.data;
      const filterTags = state.get('filterTags').push(newFilterTag);
      return state.set('filterTags', filterTags)
                  .set('filterInput', '');
    }
    case DELETE_FILTER: {
      const index = action.data;
      const filterTags = state.get('filterTags').delete(index);
      return state.set('filterTags', filterTags)
                  .set('filterInput', '');
    }
    case UPDATE_BROWSE_CARDS: {
      // TODO: Implement stubbed and remove log
      console.log(action.data);
      return state;
    }
    default:
      return state;
  }
};
