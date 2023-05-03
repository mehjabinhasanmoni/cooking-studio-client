import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../pages/Home/Home';
import ViewRecipes from '../pages/ViewRecipes/ViewRecipes';

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
                path : '/recipes',
                element :<ViewRecipes></ViewRecipes>,
                loader : ({params}) => fetch(`https://cooking-studio-server-mehjabinhasanmoni.vercel.app/chefinfo/${params.id}`)
                
            },

        ]
    }
])
export default router;