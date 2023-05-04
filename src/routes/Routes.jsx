import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import SingleChef from '../container/SingleChef/SingleChef';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element :<Home></Home>,
                loader : () => fetch("https://cooking-studio-server-mehjabinhasanmoni.vercel.app/chefinfo")
            },
            {
                path : ':id',
                element :<SingleChef></SingleChef>,
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

        ]
    }
])
export default router;