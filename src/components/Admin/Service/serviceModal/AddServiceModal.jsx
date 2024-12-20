import React, { useState, useEffect } from "react";
import ModalTemplate from "../../../ModalTemplate/ModalTemplate.jsx";
import styles from "./AddServiceModal.module.css";

const AddServiceModal = ({ isOpen, onClose, onSave }) => {
    const [image, setImage] = useState("");
    const [selectedGame, setSelectedGame] = useState(null);
    const [currentCategoryPath, setCurrentCategoryPath] = useState([]); // Хранит индексы выбранных категорий
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const games = [
        {
            id: 1,
            name: "Test",
            categories: [
                {
                    name: "0",
                    subcategories: [
                        {
                            name: "0.1",
                            subcategories: [
                                {
                                    name: "0.1.1",
                                    subcategories: [],
                                },
                                {
                                    name: "0.1.2",
                                    subcategories: [
                                        {
                                            name: "0.1.2.1",
                                            subcategories: [
                                                {
                                                    name: "0.1.2.1.1",
                                                    subcategories: [],
                                                },
                                            ],
                                        },
                                        {
                                            name: "0.1.2.2",
                                            subcategories: [
                                                {
                                                    name: "0.1.2.2.1",
                                                    subcategories: [
                                                        {
                                                            name: "0.1.2.2.1.1",
                                                            subcategories: [
                                                                {
                                                                    name: "0.1.2.2.1.1.1",
                                                                    subcategories: [
                                                                        {
                                                                            name: "0.1.2.2.1.1.1.1",
                                                                            subcategories: [
                                                                                {
                                                                                    name: "0.1.2.2.1.1.1.1.1",
                                                                                    subcategories: [
                                                                                        {
                                                                                            name: "0.1.2.2.1.1.1.1.1",
                                                                                            subcategories: [],
                                                                                        },
                                                                                    ],
                                                                                },
                                                                            ],
                                                                        },
                                                                    ],
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    name: "0.1.3",
                                    subcategories: [],
                                },
                            ],
                        },
                        {
                            name: "0.2",
                            subcategories: [],
                        },
                        {
                            name: "0.3",
                            subcategories: [],
                        },
                    ],
                },
                {
                    name: "1",
                    subcategories: [],
                },
                {
                    name: "2",
                    subcategories: [],
                },
                {
                    name: "3",
                    subcategories: [],
                },
                {
                    name: "4",
                    subcategories: [],
                },
            ],
        },
    ];

    useEffect(() => {
        if (isOpen) {
            setImage("");
            setSelectedGame(null);
            setCurrentCategoryPath([]);
            setDescription("");
            setPrice("");
        }
    }, [isOpen]);

    // Получение категорий для текущего пути
    const getCategoriesAtPath = (path) => {
        if (!selectedGame) return [];
        let categories = selectedGame.categories;
        for (const index of path) {
            categories = categories[index]?.subcategories || [];
        }
        return categories;
    };

    // Обновление пути категорий
    const handleCategorySelect = (level, selectedIndex) => {
        const newPath = currentCategoryPath.slice(0, level);
        newPath.push(selectedIndex);
        setCurrentCategoryPath(newPath);
    };

    const handleSave = () => {
        if (!image || !selectedGame || !description || !price) {
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
            image,
            game: selectedGame.name,
            categories: selectedCategories,
            description,
            price: parseFloat(price),
        });
    };

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
                            <img src={image} alt="Preview" />
                        </div>
                    )}

                    {/* Выбор игры */}
                    <label>Выберите игру:</label>
                    <select
                        value={selectedGame?.name || ""}
                        onChange={(e) =>
                            setSelectedGame(games.find((game) => game.name === e.target.value))
                        }
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

                    {/* Рендеринг всех уровней категорий */}
                    {selectedGame &&
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
                    {selectedGame && (
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
