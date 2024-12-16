import { useState, useEffect } from "react";
import ModalTemplate from "src/components/Utils/modalTemplate/ModalTemplate.jsx";
import modalStyles from "./GameModal.module.css";

const EditGameModal = ({ isOpen, onClose, gameData, onSave }) => {
    const [gameTitle, setGameTitle] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        if (gameData) {
            setGameTitle(gameData.title);
            setGameDescription(gameData.description);
            setCategories(gameData.categories);
        }
    }, [gameData]);

    const updateCategory = (category, value) => {
        category.name = value;
        setCategories([...categories]);
    };

    const saveGame = () => {
        if (!gameTitle || !gameDescription) {
            alert("Пожалуйста, заполните название и описание игры.");
            return;
        }

        const updatedGame = { ...gameData, title: gameTitle, description: gameDescription, categories };
        onSave(updatedGame);
        onClose();
    };

    const renderCategories = (parentCategories) =>
        parentCategories.map((category, index) => (
            <div key={index} className={modalStyles.category}>
                <div className={modalStyles.categoryRow}>
                    <input
                        type="text"
                        placeholder="Название категории"
                        value={category.name}
                        onChange={(e) => updateCategory(category, e.target.value)}
                    />
                    {/* Другие кнопки для подкатегорий */}
                </div>
                <div className={modalStyles.nestedSubcategories}>
                    {renderCategories(category.subcategories)}
                </div>
            </div>
        ));

    return (
        <ModalTemplate
            isOpen={isOpen}
            title="Редактировать игру"
            content={
                <div className={modalStyles.modalBody}>
                    <label htmlFor="gameTitle">Название игры:</label>
                    <input
                        type="text"
                        id="gameTitle"
                        value={gameTitle}
                        onChange={(e) => setGameTitle(e.target.value)}
                        required
                    />
                    <label htmlFor="gameDescription">Описание игры:</label>
                    <textarea
                        id="gameDescription"
                        value={gameDescription}
                        onChange={(e) => setGameDescription(e.target.value)}
                        required
                    />
                    <div>
                        <h3>Категории</h3>
                        {renderCategories(categories)}
                    </div>
                </div>
            }
            actions={
                <div className={modalStyles.modalActions}>
                    <button className={modalStyles.saveBtn} onClick={saveGame}>
                        Сохранить
                    </button>
                    <button className={modalStyles.cancelBtn} onClick={onClose}>
                        Закрыть
                    </button>
                </div>
            }
            onClose={onClose}
            modalClassName={`${modalStyles.modal} ${isOpen ? modalStyles.show : ""}`}
            modalContentClassName={modalStyles.modalContent}
        />
    );
};

export default EditGameModal;