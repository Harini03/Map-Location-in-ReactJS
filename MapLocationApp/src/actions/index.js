/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import axios from 'axios';
import {
  FETCH_LATLONG_API_URL,
  FETCH_API_BEGIN,
  FETCH_API_SUCCESS,
  FETCH_API_ERROR,
  STATE_UPDATE,
  CITY_UPDATE
} from '../constants';


export const fetchApiBegin = () => ({
  type: FETCH_API_BEGIN
});

export const fetchApiSuccess = (latLongResponse) => ({
  type: FETCH_API_SUCCESS,
  payload: latLongResponse
});

export const fetchApiError = (err) => ({
  type: FETCH_API_ERROR,
  payload: err
});

export const fetchLatLongAPI = (state, city) => axios.get(`${FETCH_LATLONG_API_URL}/${state}/${city}`);

export const fetchApi = (state,city) => (dispatch) => {
  dispatch(fetchApiBegin());
  const onSuccess = (response) => {
    if (response.data) {
      dispatch(fetchApiSuccess(response.data));
    } else {
      dispatch(fetchApiError(response.data));
    }
  };

  const onError = (error) => {
    dispatch(fetchApiError(error));
  };
  fetchLatLongAPI(state,city)
    .then(onSuccess)
    .catch(onError);
};

export const updateState=(state)=>({
    type: STATE_UPDATE,
    payload: state
});

export const updateCity=(city)=>({
    type: CITY_UPDATE,
    payload: city
});