import { combineReducers } from 'redux';
import profile from './profile_reducer';
import repos from './repo_reducer';
import searchRepo from './search_reducer';
import categoriesRepo from './categories_reducer';

const rootReducer = combineReducers({
  profile : profile,
  repos : repos,
  search: searchRepo,
  categories : categoriesRepo
});

export default rootReducer;
