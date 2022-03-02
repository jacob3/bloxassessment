import * as actionTypes from '../../actionTypes';
import { ToasterTypesEnum } from '../../../types/toasterReducerType';

export type SetToasterText = {
    type: typeof actionTypes.SET_TOASTER_TEXT;
    activeClass: ToasterTypesEnum;
    text: string;
};

export type HideToaster = {
    type: typeof actionTypes.HIDE_TOASTER;
};
