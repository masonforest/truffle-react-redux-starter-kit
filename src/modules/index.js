import metacoin from './metacoin';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({
  metacoin,
  form: formReducer,
});
export default rootReducer;
