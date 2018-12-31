import {FETCH_PROFILE, REQUEST_CAT, RECEIVE_CAT} from '../actions';
import models from '../models.json';
export default function categories(
  state = {
    isFetching: false,
    didReceive : false,
    items: models.categories
  },
  action
) {
  switch (action.type) {

    case REQUEST_CAT:
      return Object.assign({}, state, {
        isFetching: true,
        didReceive: false
      })
    case RECEIVE_CAT:
      return Object.assign({}, state, {
        isFetching: false,
        didReceive:true,
        items: action.payload,
      })
    default:
      return state
  }
}