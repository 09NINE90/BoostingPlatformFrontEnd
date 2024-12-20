import styles from "./GameSection.module.css";
import {useEffect, useState} from "react";
import AddGameModal from "../modal/AddGameModal.jsx";
import GameCard from "../card/GameCard.jsx";
import {getAllGamesByPageApi} from "../../../../api/gamesApi.jsx";

const GameSection = () => {
    const [isAddGameModalOpen, setIsAddGameModalOpen] = useState(false);
    const [isEditGameModalOpen, setIsEditGameModalOpen] = useState(false);
    const [games, setGames] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);

    const getAllGames = async (pageNumber = 1) => {
        const requestData = { pageNumber: pageNumber, pageSize: 10 };

        try {
            const response = await getAllGamesByPageApi(requestData);
            setGames(response); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    };

    // Сохранение новой игры
    const handleSaveGame = (gameData) => {
        if (selectedGame) {
            // Если редактирование, обновляем существующую игру
            setGames((prevGames) =>
                prevGames.map((game) => (game.id === selectedGame.id ? { ...gameData, id: game.id } : game))
            );
        } else {
            // Если создание новой игры, добавляем её
            setGames((prevGames) => [
                ...prevGames,
                { ...gameData, id: new Date().getTime() }, // Генерируем уникальный id
            ]);
        }

        setIsAddGameModalOpen(false);
        setIsEditGameModalOpen(false);
        setSelectedGame(null); // Сбрасываем выбранную игру
    };

    // Открыть модальное окно редактирования
    const handleEditGame = (game) => {
        setSelectedGame(game);
        setIsEditGameModalOpen(true);
    };

    useEffect(() => {
        getAllGames();
    }, []);

    return (
        <section className={styles.gamesSection}>
            {/* Панель поиска и добавления */}
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Search by Game Name" />
                <button
                    className={styles.addNewGame}
                    onClick={() => {
                        setSelectedGame(null); // Сбрасываем выбранную игру для создания новой
                        setIsAddGameModalOpen(true);
                    }}
                >
                    + Add New Game
                </button>
            </div>

            {/* Список игр */}
            <div className={styles.gamesList}>
                {games.map((game) => (
                    <GameCard
                        key={game.id}
                        id={game.id}
                        image={game.image}
                        title={game.title}
                        description={game.description}
                        categories={game.categories}
                        onEditClick={handleEditGame}
                    />
                ))}
            </div>

            {/* Модальное окно для создания/редактирования игры */}
            <AddGameModal
                isOpen={isAddGameModalOpen || isEditGameModalOpen}
                onClose={() => {
                    setIsAddGameModalOpen(false);
                    setIsEditGameModalOpen(false);
                    setSelectedGame(null);
                }}
                onSave={handleSaveGame}
                gameData={selectedGame} // Передаем данные выбранной игры в модальное окно
            />
        </section>
    );
};

export default GameSection;

/* Массив должен содержать данные в следующем формате
const games = [
    {
        id: 1,
        image: "/path/to/image.jpg",
        title: "League of Legends",
        description: "A team-based strategy game where two teams of five compete to destroy the other’s base.",
        categories: ["MOBA", "Strategy"],
    },
    {
        id: 2,
        image: "/path/to/image2.jpg",
        title: "Valorant",
        description: "A tactical first-person shooter game.",
        categories: ["FPS", "Tactical"],
    },
];
*/