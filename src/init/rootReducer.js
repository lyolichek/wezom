import { combineReducers } from 'redux';
import { userReducer as user} from '../bus/reducer';

export const rootReducer = combineReducers({
    user,
});
