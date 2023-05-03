
import { Container, Row } from 'react-bootstrap';

const Promo = () => {
    return (
        <div className='container-fluid promo-container'>
            <Container>
                <Row>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center text-white pt-2 pb-2 '>
                        <h1>6</h1>
                        <p>Chefs</p> 
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center text-white pt-2 pb-2'>
                        <h1>20</h1>
                        <p>Recipes</p> 
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center text-white pt-2 pb-2'>
                        <h1>124</h1>
                        <p>Blog</p> 
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12 text-center text-white pt-2 pb-2'>
                        <h1>5000</h1>
                        <p>Likes</p> 
                    </div>
                </Row>
            </Container>
            
        </div>
    );
};

export default Promo;