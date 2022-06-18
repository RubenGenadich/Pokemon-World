import { combineReducers } from 'redux';
import pokemon from './pokemon/index';

const rootReduser = combineReducers({
  pokemon,
});

export default rootReduser;
