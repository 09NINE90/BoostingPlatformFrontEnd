import { useState, useEffect } from "react";
import ModalTemplate from "../../../../components/utils/modalTemplate/ModalTemplate.jsx";
import styles from "./EditServiceModal.module.css";

const EditServiceModal = ({ isOpen, onClose, onSave, service, games }) => {
    const [image, setImage] = useState(service.image);
    const [game, setGame] = useState(service.game);
    const [description, setDescription] = useState(service.description);
    const [price, setPrice] = useState(service.price);
    const [currentCategoryPath, setCurrentCategoryPath] = useState([]); // Хранит индексы выбранных категорий

    useEffect(() => {
        if (isOpen) {
            setImage(service.image || "");
            setGame(service.game || "");
            setDescription(service.description || "");
            setPrice(service.price || "");
            setCurrentCategoryPath(service.categories || []);
        }
    }, [isOpen, service]);

    const getCategoriesAtPath = (path) => {
        const selectedGame = games.find((g) => g.name === game);
        if (!selectedGame) return [];
        let categories = selectedGame.categories;
        for (const index of path) {
            categories = categories[index]?.subcategories || [];
        }
        return categories;
    };

    const handleCategorySelect = (level, selectedIndex) => {
        const newPath = currentCategoryPath.slice(0, level);
        newPath.push(selectedIndex);
        setCurrentCategoryPath(newPath);
    };

    const handleSave = () => {
        if (!image || !game || !description || !price) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }

        const selectedCategories = currentCategoryPath.reduce((result, index, level) => {
            const categories = getCategoriesAtPath(currentCategoryPath.slice(0, level));
            const category = categories[index];
            if (category) result.push(category.name);
            return result;
        }, []);

        onSave({
            ...service,
            image,
            game,
            categories: selectedCategories,
            description,
            price: parseFloat(price),
        });
    };

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Редактировать услугу"
            content={
                <div className={styles.modalBody}>
                    <label>Изображение:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <label>Игра:</label>
                    <select
                        value={game}
                        onChange={(e) => setGame(e.target.value)}
                    >
                        <option value="" disabled>
                            -- Выберите игру --
                        </option>
                        {games.map((game) => (
                            <option key={game.id} value={game.name}>
                                {game.name}
                            </option>
                        ))}
                    </select>

                    {game &&
                        currentCategoryPath.map((selectedIndex, level) => (
                            <div key={level} className={styles.categoryRow}>
                                <label>Выберите категорию уровня {level + 1}:</label>
                                <select
                                    value={selectedIndex}
                                    onChange={(e) =>
                                        handleCategorySelect(level, parseInt(e.target.value, 10))
                                    }
                                >
                                    <option value="" disabled>
                                        -- Выберите категорию --
                                    </option>
                                    {getCategoriesAtPath(currentCategoryPath.slice(0, level)).map(
                                        (category, index) => (
                                            <option key={index} value={index}>
                                                {category.name}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                        ))}

                    {game && (
                        <div className={styles.categoryRow}>
                            <label>
                                {currentCategoryPath.length === 0
                                    ? "Выберите категорию:"
                                    : "Выберите подкатегорию:"}
                            </label>
                            <select
                                value=""
                                onChange={(e) =>
                                    handleCategorySelect(
                                        currentCategoryPath.length,
                                        parseInt(e.target.value, 10)
                                    )
                                }
                            >
                                <option value="" disabled>
                                    -- Выберите категорию --
                                </option>
                                {getCategoriesAtPath(currentCategoryPath).map((category, index) => (
                                    <option key={index} value={index}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    <label>Описание:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <label>Стоимость:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            }
            actions={
                <div>
                    <button className={styles.cancelBtn} onClick={onClose}>
                        Закрыть
                    </button>
                    <button className={styles.saveBtn} onClick={handleSave}>
                        Сохранить
                    </button>
                </div>
            }
            onClose={onClose}
        />
    );
};

export default EditServiceModal;