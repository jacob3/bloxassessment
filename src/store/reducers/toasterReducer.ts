import { ToasterReducerState, ToasterTypesEnum } from '../../types/toasterReducerType';
import * as actionTypes from '../actionTypes';
import * as types from '../actions/types/toasterActionsTypes';

const initialState: ToasterReducerState = {
    show: false,
    activeClass: ToasterTypesEnum.NONE,
    text: ''
};

const setToasterText = (state: ToasterReducerState, action: types.SetToasterText): ToasterReducerState => {
    return {
        ...state,
        show: true,
        activeClass: action.activeClass,
        text: action.text
    };
};

const hideToaster = (state: ToasterReducerState): ToasterReducerState => {
    return {
        ...state,
        show: false
    };
};

const reducer = (state = initialState, action: types.SetToasterText | types.HideToaster): ToasterReducerState => {
    switch (action.type) {
        case actionTypes.SET_TOASTER_TEXT:
            return setToasterText(state, action);
        case actionTypes.HIDE_TOASTER:
            return hideToaster(state);
        default:
            return state;
    }
};

export default reducer;
