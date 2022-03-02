import React, { ReactElement } from 'react';
import { Routes } from './routes/routes';
import Toaster from './components/Toaster/Toaster';

const App: React.FC = (): ReactElement => {
    return (
        <>
            <Toaster />
            <Routes />
        </>
    );
};

export default App;
