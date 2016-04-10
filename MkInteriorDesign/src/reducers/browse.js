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
    },
    listings: [
      {
        designID: 1,
        location: 'Punggol Northshore (Blk 123)',
        name: 'Our Journey',
        houseType: 'Apartment',
        style: 'Scandinavian',
        size: 111,
        price: 30000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      },
      {
        designID: 2,
        location: '4 Choa Chu Kang Park',
        name: 'Our Home',
        houseType: 'Condo',
        style: 'Jungle',
        size: 200,
        price: 26000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      },
      {
        designID: 3,
        location: '1 Pandan Valley Walk',
        name: 'Our Walk',
        houseType: 'Apartment',
        style: 'Cats',
        size: 232,
        price: 17000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      },
      {
        designID: 4,
        location: 'Bedok Street 20 (Blk 134)',
        name: 'Our House',
        houseType: 'Apartment',
        style: 'Cement',
        size: 80,
        price: 20000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      },
      {
        designID: 5,
        location: 'Geylang Street 35 (Blk 38)',
        name: 'The Sapphire',
        houseType: 'Condo',
        style: 'Wild',
        size: 73,
        price: 6000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      },
      {
        designID: 5,
        location: 'Jurong Central (Blk 15)',
        name: 'The Orange',
        houseType: 'Apartment',
        style: 'Dogs',
        size: 334,
        price: 182000,
        picImgURL: 's82klJas',
        notes: 'Floor tile is nice',
        liked: true,
      }
    ]
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
