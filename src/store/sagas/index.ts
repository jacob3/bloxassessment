import { all } from 'redux-saga/effects';
import { overviewWatchers } from './watchers/overviewWatcher';

export const saga = function* rootSaga(): Generator {
    yield all([overviewWatchers()]);
};
