import {FETCH_PROFILE, REQUEST_PROFILE, RECEIVE_PROFILE} from '../actions'
export default function profile(
  state = {
    isFetching: false,
    didReceive : false,
    items: {}
  },
  action
) {
  switch (action.type) {

    case REQUEST_PROFILE:
      return Object.assign({}, state, {
        isFetching: true,
        didReceive: false
      })
    case RECEIVE_PROFILE:
      return Object.assign({}, state, {
        isFetching: false,
        didReceive:true,
        items: action.payload,
      })
    default:
      return state
  }
}