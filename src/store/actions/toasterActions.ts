import * as types from './types/toasterActionsTypes';
import * as actionTypes from '../actionTypes';
import { ToasterTypesEnum } from '../../types/toasterReducerType';

export const setToasterText = (activeClass: ToasterTypesEnum, newText?: string): types.SetToasterText => {
    const text = newText ? newText : '';
    return {
        type: actionTypes.SET_TOASTER_TEXT,
        activeClass,
        text
    };
};

export const hideToaster = (): types.HideToaster => {
    return {
        type: actionTypes.HIDE_TOASTER
    };
};
