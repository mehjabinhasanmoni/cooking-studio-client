
import Banner from '../Banner/Banner';
import ChefInfo from '../../container/ChefInfo/ChefInfo';
import { useLoaderData } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Promo from '../../container/Promo/Promo';
import SpecialPromo from '../../container/SpecialPromo/SpecialPromo';

const Home = () => {
    const chefInfo = useLoaderData();
    return (
        <div >
            <Banner></Banner>
            <Container className='mt-5'>
                <Row>
                    {
                        chefInfo.map(chef => <ChefInfo
                        key ={chef.chef_id}
                        chef={chef}
                        ></ChefInfo>)
                    }
                </Row>
                
                
            </Container>
            <Promo></Promo>
            <SpecialPromo></SpecialPromo>
            

        </div>
    );
};

export default Home;