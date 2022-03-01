import { Route, Switch } from 'react-router-dom';
import React, { ReactElement } from 'react';
import OverView from '../pages/Overview/Overview';

type RouteObject = {
    path: string;
    component: React.FC;
};

const routesList: RouteObject[] = [
    {
        path: '/',
        component: OverView
    }
];

export const Routes = (): ReactElement => {
    return (
        <Switch>
            {routesList.map(({ path, component }) => {
                return (
                    <Route key={path} path={path}>
                        {React.createElement(component)}
                    </Route>
                );
            })}
        </Switch>
    );
};
