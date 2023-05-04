import Header from '../shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Banner from '../pages/Banner/Banner';


const Main = () => {
    return (
        <div>
            <Header></Header>
            
            <div>
                 <Outlet></Outlet>
            </div>
            
            <Footer></Footer>
            
        </div>
    );
};

export default Main;