import axios from "axios";

import {
  REGIONS_LIST,
  VILLAGES_BOARD,
  REMOVE_REGION
} from './constants';

export function getRegionsList() {
  return function(dispatch) {
    let checkLocal = localStorage.getItem('regions_list');
    if( checkLocal ){
      return dispatch ( {
        type: REGIONS_LIST,
        regionsList: JSON.parse( checkLocal ).data
      });
    }else{
      return axios.get('https://staging-api.amavido.de/api/regions?fields=name%20headline')
        .then((response) => {
          localStorage.setItem('regions_list', JSON.stringify(response));
          return dispatch ( {
            type: REGIONS_LIST,
            regionsList: response.data,
          });
        })
        .catch((err) => {
          return dispatch ( {
            type: REGIONS_LIST,
            regionsList: []
          });
        })
    }
  }
}

export function getRegionVillagesList(region) {
  return function(dispatch) {
    let checkLocal = localStorage.getItem('villages_'+region.id);
    if( checkLocal ){
      return dispatch ( {
        type: VILLAGES_BOARD,
        villagesBoard: {
          region: region,
          villages: JSON.parse( checkLocal ).data,
        }
      });
    }else{
      return axios.get('https://staging-api.amavido.de/api/villages?fields=name%20headline&regionId='+region.id)
        .then((response) => {
          localStorage.setItem('villages_'+region.id, JSON.stringify(response));
          return dispatch ( {
            type: VILLAGES_BOARD,
            villagesBoard: {
              region: region,
              villages: response.data,
            }
          });
        })
        .catch((err) => {
          return dispatch ( {
            type: VILLAGES_BOARD,
            villagesBoard: {
              region: region,
              villages: [],
            }
          });
        })
    }
  }
}


export function removeRegion(regionId) {
  return function(dispatch) {
    return dispatch ( {
      type: REMOVE_REGION,
      regionId: regionId
    });
  }
}