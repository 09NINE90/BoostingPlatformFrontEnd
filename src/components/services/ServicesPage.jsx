import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import axios from 'axios';
import './Services.css';
import CategoryButton from './CategoryButton';
import Navigation from "../navigation/Navigation.jsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ServicesPage = () => {
    useEffect(() => {
        document.title = "Services - Dead PackMan"; // Устанавливаем заголовок
    }, []);

    const location = useLocation();
    const {game} = location.state || {};
    const [categories, setCategories] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);  // Состояние для активных категорий и подкатегорий
    const [orders, setOrders] = useState([]);

    const getAllOrders = async (categories = '') => {
        if (!game) return;

        const gameRequest = {title: game.title};
        const requestData = {game: gameRequest, categories: categories, pageNumber: 1, pageSize: 10};

        try {
            const response = await axios.post(`${baseUrl}/orders/getAllOrders`, requestData, {withCredentials: true});
            setOrders(response.data.baseOrder); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    };

    const loadGameData = async () => {
        const gameId = game.id; // Используем ID игры, полученной через react-router
        const endpoint = `${baseUrl}/games/${gameId}`;

        try {
            const response = await fetch(endpoint);
            const gameData = await response.json();

            setCategories(gameData.categories || []);
            getAllOrders(); // Загружаем все заказы по умолчанию
        } catch (error) {
            console.error("Ошибка загрузки данных игры:", error);
        }
    };

    const handleCategoryClick = (category) => {
        setActiveCategories((prevActiveCategories) => {
            const newActiveCategories = [...prevActiveCategories];
            const categoryIndex = prevActiveCategories.findIndex(
                (activeCategory) => activeCategory.name === category.name
            );

            if (categoryIndex === -1) {
                newActiveCategories.push(category); // Добавляем категорию в список активных категорий
            } else {
                newActiveCategories.splice(categoryIndex + 1); // Очищаем дочерние категории
            }

            return newActiveCategories;
        });

        getAllOrders(category.name); // Загружаем заказы для выбранной категории
    };

    useEffect(() => {
        if (game) {
            loadGameData();
        }
    }, [game]);

    if (!game) {
        return <p>Игра не выбрана. Вернитесь на главную страницу.</p>;
    }

    return (
        <>
            <Navigation/>
            <main>
                <div className="game-header">
                    <h1>{game.title} Boosting Services</h1>
                    <p>{game.description || "Описание отсутствует."}</p>
                </div>

                {/* Контейнер категорий */}
                <div className="category-container" id="categoryContainer">
                    <div className="category-row">
                        {categories.length > 0 ? (
                            categories.map((category) => (
                                <CategoryButton
                                    key={category.name}
                                    category={category}
                                    handleCategoryClick={handleCategoryClick}
                                    isActive={activeCategories.some((activeCategory) => activeCategory.name === category.name)}
                                />
                            ))
                        ) : (
                            <p>Загружаются категории...</p>
                        )}
                    </div>

                    {/* Рендеринг подкатегорий по уровням */}
                    {activeCategories.map((category) => (
                        <div key={category.name}>
                            {category.subcategories && category.subcategories.length > 0 && (
                                <div className="subcategory-container">
                                    {category.subcategories.map((subcat) => (
                                        <button
                                            key={subcat.name}
                                            className="subcategory-button"
                                            onClick={() => handleCategoryClick(subcat)}
                                        >
                                            {subcat.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Отображаем заказы */}
                <section className="services-container">
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
        </>

    );
};

export default ServicesPage;
