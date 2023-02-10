import React from 'react'
import { Navigate, RouteObject } from 'react-router';
import { createBrowserRouter } from 'react-router-dom'
import App from '../layout/App';
import HomePage from '../../features/home/HomePage';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import Login from '../../features/auth/Login';
import Register from '../../features/auth/Register';
import ErrorPage from '../../features/errors/ErrorPage';
import ProfilePage from '../../features/Profiles/ProfilePage';

export const routes: RouteObject[] = [
    {
        path:"/neil-client/",
        // path:"/",
        element: <App />,
        children: [
            // {element: <RequireAuth />, children:[
            //     {path: "activities/:id", element: <ActivityDetails />},
            //     {path: "createActivity", element: <ActivityForm />},
            //     {path: "manage/:id", element: <ActivityForm />},
            // ]},
            
            {path: "", element: <HomePage />},
            {path: "activities", element: <ActivityDashboard />},
            {path: "activities/:id", element: <ActivityDetails />},
            {path: "createActivity", element: <ActivityForm />},
            {path: "manage/:id", element: <ActivityForm />},

            {path: "login", element: <Login />},
            {path: "register", element: <Register />},

            {path: "profiles/:username", element: <ProfilePage />},


            {path: "errors", element: <ErrorPage />},
            {path: "not-found", element: <ErrorPage />},
            {path: "server-error", element: <ErrorPage />},
            {path: "*", element: <Navigate replace to="/not-found" />},
        ]
    }
]
export const router = createBrowserRouter(routes);
