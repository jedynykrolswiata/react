import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export const store = createStore(
    reducers,
    applyMiddleware(ReduxThunk)
);