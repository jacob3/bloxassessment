import { call, put } from 'redux-saga/effects';
import * as api from '../../../api/blox';
import * as overviewActions from '../../actions/overviewActions';
import * as toasterActions from '../../actions/toasterActions';
import { CoinType } from '../../../types/coin';
import { ToasterTypesEnum } from '../../../types/toasterReducerType';

export type ApiResponse<T> = {
    data: T;
};

export function* getAllCoinsWorker(): Generator {
    try {
        yield put(overviewActions.setStartloadingCoins());
        const response = (yield call(api.getAllCoins)) as ApiResponse<CoinType[]>;
        yield put(overviewActions.setError(false));
        yield put(overviewActions.setAllCoins(response.data));
        yield put(toasterActions.setToasterText(ToasterTypesEnum.SUCCESS, 'Successfully retrieved data!'));
    } catch (error) {
        yield put(
            toasterActions.setToasterText(ToasterTypesEnum.ERROR, "Can't reach api. Will try again in 15 seconds automatically")
        );
        yield put(overviewActions.setError(true));
    }
}
