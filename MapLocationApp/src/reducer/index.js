
import {
    FETCH_API_BEGIN,
    FETCH_API_SUCCESS,
    FETCH_API_ERROR,
    STATE_UPDATE,
    CITY_UPDATE
  } from '../constants';
  
  const initialState = {
    isFetching: false,
    isError: false,
    visible: false,
    mapData: [],
    state:'',
    city:''
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_API_BEGIN: {
        return Object.assign({}, state, {
          isFetching: true,
          mapData: []
        });
      }
      case FETCH_API_SUCCESS: {
        
        return Object.assign({}, state, {
          isFetching: false,
          isError: false,
          mapData: action.payload.places
        });
      }
      case FETCH_API_ERROR: {
        return Object.assign({}, state, {
          isFetching: false,
          isError: true,
          mapData: action.payload
        });
      }
      case STATE_UPDATE:{
        return Object.assign({},state,{
            state: action.payload,
            mapData: [],
            isError: false,
            isFetching: false
        })
      }
      case CITY_UPDATE:{
        return Object.assign({},state,{
            city: action.payload,
            mapData: [],
            isError: false,
            isFetching: false
        })
      }
      default:
        return state;
    }
  }
  