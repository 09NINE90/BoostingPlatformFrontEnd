import './Services.css';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import CategoryButton from './CategoryButton';
import {getAllServicesApi} from "../../api/servicesApi.jsx";
import {getGameByIdApi} from "../../api/gamesApi.jsx";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

const ServicesPage = () => {
    useEffect(() => {
        document.title = "Services - Dead PackMan"; // Устанавливаем заголовок
    }, []);

    const location = useLocation();
    const {game} = location.state || {};
    const [clickCategories, setClickCategories] = useState('');
    const [categories, setCategories] = useState([]);
    const [activeCategories, setActiveCategories] = useState([]);  // Состояние для активных категорий и подкатегорий
    const [orders, setOrders] = useState([]);

    const getServices = async (categories = '') => {
        if (!game) return;

        const gameRequest = {title: game.title};
        const requestData = {game: gameRequest, categories: categories, pageNumber: 1, pageSize: 10};

        try {
            const response = await getAllServicesApi(requestData);
            setOrders(response);
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    };

    const loadGameData = async () => {
        const gameId = game.id;

        try {
            const gameData = await getGameByIdApi(gameId);
            setCategories(gameData.categories || []);
            getServices(); // Загружаем все заказы по умолчанию
        } catch (error) {
            console.error("Ошибка загрузки данных игры:", error);
        }
    };

    const handleCategoryClick = (category) => {
        if (activeCategories.includes(category)) {
            const index = activeCategories.findIndex((category) => category.name === clickCategories);
            const newActiveCategories = [...activeCategories];

            setActiveCategories(newActiveCategories.slice(0, index))
            return
        }

        setActiveCategories((prevState) => ([
            ...prevState,
            category,
        ]))

        getServices(category.name); // Загружаем заказы для выбранной категории
    };

    useEffect(() => {
        if (game) {
            loadGameData();
        }
    }, [game]);

    useEffect(() => {

    }, [activeCategories])


    if (!game) {
        return <p>Игра не выбрана. Вернитесь на главную страницу.</p>;
    }

    return (
        <>
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
                                    handleCategoryClick={() => {
                                        setClickCategories((category.name))
                                        handleCategoryClick(category)

                                    }}
                                    isActive={activeCategories.some((activeCategory) => activeCategory.name === category.name)}
                                />
                            ))
                        ) : (
                            <p>Загружаются категории...</p>
                        )}
                    </div>

                    {/* Рендеринг подкатегорий по уровням */}
                    {activeCategories.map((category) => {
                            // if (category.name === clickCategories) return null

                            return (
                                <div key={category.name}>
                                    {category.subcategories && category.subcategories.length > 0 && (
                                        <div className="subcategory-container">
                                            {category.subcategories.map((subcat) => (
                                                <button
                                                    key={subcat.name}
                                                    className="subcategory-button"
                                                    onClick={() => {
                                                        setClickCategories(subcat.name)
                                                        handleCategoryClick(subcat)
                                                    }}
                                                >
                                                    {subcat.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    )}
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
