import axios from "axios";

import {
  REGIONS_LIST,
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