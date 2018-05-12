import { ACTION_APP_TEST } from '../constant';

const INITIAL_STATE = {
    title: ''
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ACTION_APP_TEST:
            return { ...state, title: action.payload.title }
        default:
            return state;
    }
}