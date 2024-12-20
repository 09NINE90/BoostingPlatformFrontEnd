import { useEffect } from "react";
import {promoList} from './HomeData';
import Promo from './Promo.jsx';
import './HomePage.css'

const HomePage = () => {
    useEffect(() => {
        document.title = "Home - Dead PackMan"; // Устанавливаем заголовок
    }, []);
    return (
        <>
            <main>
                <section className="promo">
                    <Promo className='promo-left'  {...promoList[0]}/>
                    <div className="promo-center">
                        <img
                            src="https://cdn.culture.ru/images/a2b0a486-c007-50db-9028-8477d0b2e5ac"
                            alt="The Final Shape Promo"/>
                    </div>
                    <Promo className='promo-right' {...promoList[1]}/>
                </section>
            </main>
        </>
    );
};

export default HomePage;