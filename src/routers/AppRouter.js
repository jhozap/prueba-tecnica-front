import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from '../components/login/LoginPage';
import ContentRoutes from './ContentRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />

                <Route path="/*" element={
                    <PrivateRoute>
                        <ContentRoutes />
                    </PrivateRoute>
                } />

            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
