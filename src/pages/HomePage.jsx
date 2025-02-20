import Header from '../layouts/home/Header.jsx';
import {promoList} from '../layouts/home/HomeData.js';
import { Outlet } from "react-router";
import Promo from '../layouts/home/Promo.jsx';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    );
};

export default HomePage;