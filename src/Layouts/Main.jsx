import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;