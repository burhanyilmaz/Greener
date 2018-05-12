import { combineReducers } from 'redux';
import { STATE_APP } from '../../sections/App/constant';
import AppReducer from '../../sections/App/reducer/AppReducer';

export default combineReducers({
    [STATE_APP]: AppReducer,
});