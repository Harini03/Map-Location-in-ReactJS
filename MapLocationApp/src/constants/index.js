/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_LATLONG_API_URL = 'http://api.zippopotam.us/us/';
export const FETCH_API_BEGIN = 'fetchApiBegin';
export const FETCH_API_SUCCESS = 'fetchApiSuccess';
export const FETCH_API_ERROR = 'fetchApiError';
export const STATE_UPDATE = 'stateUpdate';
export const CITY_UPDATE = 'cityUpdate';

