import { fromJS } from 'immutable';

import {
  REGIONS_LIST,
  VILLAGES_BOARD
} from './constants';

const initialState = fromJS({
  regionsList: [],
  villagesBoard: []
});

function regionsListReducer(state = initialState, action) {
  switch (action.type) {
    case REGIONS_LIST:
      return state
        .set('regionsList', action.regionsList);
    case VILLAGES_BOARD:
    	let existingVillageBoard = state.toJS().villagesBoard;
			existingVillageBoard.push( action.villagesBoard );
      return state
        .set('villagesBoard', fromJS( existingVillageBoard ) );
    default:
      return state;
  }
}

export default regionsListReducer;