import { call, put } from 'redux-saga/effects';
import * as api from '../../../api/blox';
import * as actions from '../../actions/overviewActions';
import { CoinType } from '../../../types/coin';

export type ApiResponse<T> = {
    data: T;
};

export function* getAllCoinsWorker(): Generator {
    try {
        yield put(actions.setStartloadingCoins());
        const response = (yield call(api.getAllCoins)) as ApiResponse<CoinType[]>;
        yield put(actions.setAllCoins(response.data));
    } catch (error) {
        // todo: proper error handling
    }
}
