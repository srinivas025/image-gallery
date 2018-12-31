import { REQUEST_REPOS, RECEIVE_REPOS} from '../actions'
export default function repos(
  state = {
    isFetching: false,
    didReceive : false,
    items: []
  },
  action
) {
  switch (action.type) {

    case REQUEST_REPOS:
      return Object.assign({}, state, {
        isFetching: true,
        didReceive: false
      })
    case RECEIVE_REPOS:
      return Object.assign({}, state, {
        isFetching: false,
        didReceive:true,
        items: action.payload,
      })
    default:
      return state
  }
}