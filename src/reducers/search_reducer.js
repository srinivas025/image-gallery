import { SEARCH_REPOS, SEARCH_CLEARED } from '../actions'
const initialState = {
    searchText: ''
};
export default function searchRepos(state = initialState ,action) {
  switch (action.type) {
    case SEARCH_REPOS:
      return Object.assign({}, state, {
        searchText: action.payload
      })
    case SEARCH_CLEARED:
      return Object.assign({}, state, {
        searchText: action.payload
      })
    default:
      return state
  }
}