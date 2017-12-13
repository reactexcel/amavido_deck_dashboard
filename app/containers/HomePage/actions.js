import axios from "axios";

import {
  REGIONS_LIST,
  VILLAGES_BOARD
} from './constants';

export function getRegionsList() {
  return function(dispatch) {
    return axios.get('https://staging-api.amavido.de/api/regions?fields=name%20headline')
      .then((response) => {
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

export function getRegionVillagesList(region) {
  return function(dispatch) {
    return axios.get('https://staging-api.amavido.de/api/villages?fields=name%20headline&regionId='+region.id)
      .then((response) => {
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