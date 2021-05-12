
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
