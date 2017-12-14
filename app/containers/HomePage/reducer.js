import { fromJS } from 'immutable';
import _ from 'lodash'

import {
  REGIONS_LIST,
  VILLAGES_BOARD,
  REMOVE_REGION
} from './constants';

const initialState = fromJS({
  regionsList: [],
  villagesBoard: []
});

function regionsListReducer(state = initialState, action) {
  let existingVillageBoard = state.toJS().villagesBoard;
  switch (action.type) {
    case REGIONS_LIST:
      return state
        .set('regionsList', action.regionsList);
    case VILLAGES_BOARD:    	
			existingVillageBoard.push( action.villagesBoard );
      return state
        .set('villagesBoard', fromJS( existingVillageBoard ) );
    case REMOVE_REGION:
      let newVillagesBoard = _.remove(existingVillageBoard, function(n) {
        if( n.region.id === action.regionId ){
          return 0;
        }
        return 1
      });
      return state
        .set('villagesBoard', fromJS( newVillagesBoard ) );
    default:
      return state;
  }
}

export default regionsListReducer;