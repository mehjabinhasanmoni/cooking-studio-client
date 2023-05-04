import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import SingleChef from '../container/SingleChef/SingleChef';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import PrivateRoutes from './PrivateRoutes';
import Blog from '../pages/Blog/Blog';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element :<Home></Home>,
                errorElement:<ErrorPage></ErrorPage>,
                loader : () => fetch("https://cooking-studio-server-mehjabinhasanmoni.vercel.app/chefinfo")
            },
            {
                path : '/chef-detail/:id',
                element :<PrivateRoutes><SingleChef></SingleChef></PrivateRoutes>,
                loader : ({params}) => fetch(`https://cooking-studio-server-mehjabinhasanmoni.vercel.app/recipes/${params.id}`)
                
            },
            {
                path : '/login',
                element :<Login></Login>
                
                
            },
            {
                path : '/register',
                element :<Register></Register>
                
                
            },
            {
                path : '/blog',
                element :<Blog></Blog>
                
                
            },

        ]
    }
])
export default router;