import  { useEffect, useState } from 'react';
import ViewRecipes from '../../pages/ViewRecipes/ViewRecipes';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleChef = () => {
    

    const[chef, setChef] = useState([]);
    const {id} = useParams();
    useEffect(() =>{
        fetch(`https://cooking-studio-server-mehjabinhasanmoni.vercel.app/chefinfo/${id}`)
        .then(res => res.json())
        .then(data => setChef(data));
    },[])
    
    return (
        <div>
            
           <div className='d-flex align-items-center justify-content-between chef-details'>
            
                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 p-5">
                        <img
                            className="img-fluid"
                            src={chef.Chef_Picture} 
                            alt=""
                        />
                </div>


             <div className='col-lg-5 col-md-5 col-sm-6 col-xs-12 text-left '>
                <h1>{chef.Chef_Name}</h1>
                <p>{chef.sort_description}</p>
                <div className='d-flex align-items-center justify-content-between me-5 p-3 text-black'>
                    <h5>Experience : <span>{chef.Years_of_experience}</span></h5>
                    <h5>Likes : <span>{chef.Likes}</span></h5>
                    <h5>No of Recipes : <span>{chef.Numbers_of_recipes}</span></h5>
                </div>
              
                


             </div>
           </div>

            <Container>
                    <ViewRecipes></ViewRecipes>
            </Container>
           
        </div>
    );
};

export default SingleChef;