import React, {useEffect, useState} from "react";
import axios from 'axios'
import './Services.css'


const ServicesPage = () => {

    const [orders, setOrders] = useState([]);

    const getAllOrders = async () => {
        const game = {title: "Valorant"};
        const requestData = {game, pageNumber: 1, pageSize: 10};

        try {
            const response = await axios.post('http://localhost/orders/getAllOrders', requestData, {withCredentials: true});
            setOrders(response.data.baseOrder); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    return (
        <main>
            <div className="game-header">
                <h1>Valorant Boosting Services</h1>
                <p>Повышайте свой ранг и улучшайте навыки с нашими профессиональными услугами.</p>
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
                    <p>Загрузки заказов...</p>
                )}
            </section>
        </main>
    )
}

export default ServicesPage;