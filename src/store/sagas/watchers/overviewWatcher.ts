import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../../actionTypes';
import { getAllCoinsWorker } from '../workers/overviewWorker';

export function* overviewWatchers(): Generator {
    yield takeLatest(actionTypes.GET_ALL_COINS, getAllCoinsWorker);
}
