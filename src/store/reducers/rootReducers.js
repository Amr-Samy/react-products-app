import { combineReducers } from 'redux';
import favouriteReducers from './favouritesReducers';
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
favourites: favouriteReducers,
counter:counterReducer
// Add more reducers here
});

export default rootReducer;