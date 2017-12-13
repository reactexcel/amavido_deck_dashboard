import { fromJS } from 'immutable';

import {
  REGIONS_LIST,
} from './constants';

const initialState = fromJS({
  regionsList: [],
});

function regionsListReducer(state = initialState, action) {
  switch (action.type) {
    case REGIONS_LIST:
      return state
        .set('regionsList', action.regionsList);
    default:
      return state;
  }
}

export default regionsListReducer;