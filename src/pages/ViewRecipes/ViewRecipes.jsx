import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ViewRecipes = () => {

    const singleChef = useLoaderData();
    return (
        <div>
            <h2>3 Recipes Here ....</h2>
        </div>
    );
};

export default ViewRecipes;