import React, { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router'
import RootLayout from './RootLayout'
import Private from './Private'
import Comic from '../pages/ProfilePage/Menu profile/Comic'

const HomePage = lazy(() => import("../pages/HomePage/HomePage"))
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"))
const Profile = lazy(() => import("../pages/ProfilePage/Profile"))

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index:true,
                element:<Navigate to='/home' replace/>
            },
            {
                path: 'home',
                element: <HomePage />
            },
            {  
                path: 'comic',
                element:<Comic/>
            },
            {
                path: '',
                element: <Private />,
                children: [
                    {
                        path: 'profile',
                        element: <Profile />
                    }
                ]
            }
        ]
    },{
        path:'/404',
        element:<NotFound/>
    },{
        path:'*',
        element:<Navigate to='/404'/>
    }
]);


export default Router