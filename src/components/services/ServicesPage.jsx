import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import './Services.css'


const ServicesPage = () => {

    useEffect(() => {
        document.title = "Services - Dead PackMan"; // Устанавливаем заголовок
    }, []);

    const location = useLocation();
    const { game } = location.state || {};
    const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        if (!game) return;

        const gameRequest = {title: game.title};
        const requestData = {game: gameRequest, pageNumber: 1, pageSize: 10};

        try {
            const response = await axios.post('http://localhost/orders/getAllOrders', requestData, {withCredentials: true});
            setOrders(response.data.baseOrder); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, [game]);

    if (!game) {
        return <p>Игра не выбрана. Вернитесь на главную страницу.</p>;
    }

    return (
        <main>
            <div className="game-header">
                <h1>{game.title} Boosting Services</h1>
                <p>{game.description || "Описание отсутствует."}</p>
            </div>
            <section className="services-container ">
                {orders.length > 0 ? (
                    orders.map((order) => (
                        <div key={order.id} className="card">
                            <img src={order.imageUrl} alt={order.title}/>
                            <h3>{order.title}</h3>
                            <p>{order.description}</p>
                            <p>Цена: ${order.basePrice}</p>
                        </div>
                    ))
                ) : (
                    <p>No orders by this game</p>
                )}
            </section>
        </main>
    )
}

export default ServicesPage;