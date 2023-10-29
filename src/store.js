import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './reducers';

const rootReducer = combineReducers({
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;