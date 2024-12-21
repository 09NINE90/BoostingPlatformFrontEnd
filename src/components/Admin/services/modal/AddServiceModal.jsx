import styles from "./AddServiceModal.module.css";
import { useState, useEffect } from "react";
import ModalTemplate from "../../../../components/utils/modalTemplate/ModalTemplate.jsx";
import {getGameByIdApi} from "../../../../api/gamesApi.jsx";

const AddServiceModal = ({ isOpen, onClose, onSave, games }) => {
    const [image, setImage] = useState("");
    const [selectedGameId, setSelectedGameId] = useState("");
    const [categories, setCategories] = useState([]);
    const [currentCategoryPath, setCurrentCategoryPath] = useState([]);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");

    // Загрузка данных игры (категорий)
    const loadGameData = async (gameId) => {
        try {
            const gameData = await getGameByIdApi(gameId);
            setCategories(gameData.categories || []);
        } catch (error) {
            console.error("Ошибка загрузки данных игры:", error);
        }
    };

    // Обновление категории при выборе
    const handleCategorySelect = (level, selectedIndex) => {
        const newPath = currentCategoryPath.slice(0, level);
        newPath.push(selectedIndex);
        setCurrentCategoryPath(newPath);
    };

    // Получение категорий для текущего уровня
    const getCategoriesAtPath = (path) => {
        let current = categories;
        for (const index of path) {
            if (current[index]?.subcategories) {
                current = current[index].subcategories;
            } else {
                return [];
            }
        }
        return current;
    };

    // Сохранение нового сервиса
    const handleSave = () => {
        if (!image || !selectedGameId || !description || !price || !title) {
            alert("Пожалуйста, заполните все обязательные поля.");
            return;
        }

        const selectedCategories = currentCategoryPath.reduce((result, index, level) => {
            const categoriesAtLevel = getCategoriesAtPath(currentCategoryPath.slice(0, level));
            const category = categoriesAtLevel[index];
            if (category) result.push(category.name);
            return result;
        }, []);


        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("selectedGameId", selectedGameId);
        formData.append("categories", JSON.stringify(selectedCategories));
        formData.append("image", document.querySelector('input[type="file"]').files[0]); // Исходный файл

        onSave(formData);
    };

    // Сброс состояния при открытии модального окна
    useEffect(() => {
        if (isOpen) {
            setImage('');
            setSelectedGameId('');
            setCategories([]);
            setCurrentCategoryPath([]);
            setDescription('');
            setPrice('');
        }
    }, [isOpen]);

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Добавить новую услугу"
            content={
                <div>
                    {/* Загрузка изображения */}
                    <label>Добавьте изображение:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
                    />
                    {image && (
                        <div className={styles.imagePreview}>
                            <img src={image} alt="Preview"/>
                        </div>
                    )}

                    {/* Выбор игры */}
                    <label>Выберите игру:</label>
                    <select
                        value={selectedGameId}
                        onChange={(e) => {
                            const gameId = e.target.value;
                            setSelectedGameId(gameId);
                            setCategories([]);
                            setCurrentCategoryPath([]);
                            if (gameId) {
                                loadGameData(gameId);
                            }
                        }}
                    >
                        <option value="" disabled>
                            -- Выберите игру --
                        </option>
                        {games.map((game) => (
                            <option key={game.id} value={game.id}>
                                {game.title}
                            </option>
                        ))}
                    </select>

                    {/* Рендеринг всех уровней категорий */}
                    {categories.length > 0 &&
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

                    {/* Рендеринг следующего уровня категорий */}
                    {categories.length > 0 && (
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

                    <label>Назвение услуги:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    {/* Описание услуги */}
                    <label>Описание услуги:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    {/* Стоимость услуги */}
                    <label>Стоимость услуги:</label>
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

export default AddServiceModal;
