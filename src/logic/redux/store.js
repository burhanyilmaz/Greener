import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const INITIAL_STATE = {};

export default createStore(
    reducers,
    INITIAL_STATE,
    compose(
        applyMiddleware(thunk),
    )
);