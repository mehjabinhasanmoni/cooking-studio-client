import React from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { FaBeer, FaRegEye, FaRegThumbsUp } from 'react-icons/fa';

const ChefInfo = ({chef}) => {
    const {chef_id, Chef_Picture, Chef_Name, Years_of_experience, Numbers_of_recipes, Likes} = chef;
    return (
        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12 mb-4 chef-card'>

        
                <Card className='border border-2 border-success'>
                    <div style={{height:'320px',overflow:'hidden'}} className='p-3'>
                         <Card.Img variant="top" src={Chef_Picture} />
                    </div>
                    
                    <Card.Body>
                    <Card.Title>{Chef_Name}</Card.Title>
                    <Card.Text>
                        <div>
                            <p>Years of Experience : <span>{Years_of_experience}</span></p>
                            <p>Numbers of Recipes : <span>{Numbers_of_recipes}</span></p>
                        </div>
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex align-items-center justify-content-between'>
                    <p><FaRegThumbsUp></FaRegThumbsUp> {Likes}</p>
                    <Button variant="success"> <FaRegEye></FaRegEye> View Recipes</Button>
                    </Card.Footer>
                </Card>
        </div>
    
    );
};

export default ChefInfo;