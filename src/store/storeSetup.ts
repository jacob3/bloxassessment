import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { saga } from './sagas';
import overviewReducer from './reducers/overviewReducer';

const reducer = combineReducers({
    overview: overviewReducer
});

const sagaMiddleware = createSagaMiddleware();

const middlewares: Array<Middleware> = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(saga);

export default store;

export type RootState = ReturnType<typeof reducer>;
