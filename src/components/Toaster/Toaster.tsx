import React, { ReactElement, useEffect } from 'react';
import classes from './Toaster.scss';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/storeSetup';
import { ToasterTypesEnum } from '../../types/toasterReducerType';
import { hideToaster } from '../../store/actions/toasterActions';

const Toaster: React.FC = (): ReactElement => {
    const { show, activeClass, text } = useSelector((state: RootState) => state.toaster);
    const { initialized } = useSelector((state: RootState) => state.overview);

    const dispatch = useDispatch();

    useEffect(() => {
        const hideTimer = setTimeout(() => {
            dispatch(hideToaster());
        }, 2900);
        return () => {
            clearTimeout(hideTimer);
        };
    }, [show]);

    let className;

    switch (activeClass) {
        case ToasterTypesEnum.SUCCESS:
            className = classes.success;
            break;
        case ToasterTypesEnum.ERROR:
            className = classes.error;
            break;
        case ToasterTypesEnum.INFORMATION:
            className = classes.information;
            break;
        default:
            className = classes.none;
            break;
    }

    return initialized && show ? <div className={classNames(classes.toaster, className)}>{text}</div> : <></>;
};

export default Toaster;
