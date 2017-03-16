import { combineReducers } from 'redux';
import League_Reducer from './reducer_league';

const rootReducer = combineReducers({
  league: League_Reducer
});

export default rootReducer;