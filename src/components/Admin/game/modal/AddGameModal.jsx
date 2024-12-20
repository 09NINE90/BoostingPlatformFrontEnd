import modalStyles from "./GameModal.module.css";
import {useState} from "react";
import ModalTemplate from "../../../utils/modalTemplate/ModalTemplate.jsx";
import {addGameApi} from "../../../../api/gamesApi.jsx";

const AddGameModal = ({isOpen, onClose, onSave}) => {
    const [gameImage, setGameImage] = useState(null); // Состояние для изображения
    const [previewImage, setPreviewImage] = useState(""); // Для предпросмотра изображения
    const [gameTitle, setGameTitle] = useState("");
    const [gameDescription, setGameDescription] = useState("");
    const [categories, setCategories] = useState([]);

    const addCategory = (parentCategories) => {
        parentCategories.push({
            name: "",
            subcategories: [],
        });
        setCategories([...categories]);
    };

    const updateCategory = (category, value) => {
        category.name = value;
        setCategories([...categories]);
    };

    const deleteCategory = (parentCategories, index) => {
        parentCategories.splice(index, 1);
        setCategories([...categories]);
    };

    // Обработчик выбора изображения
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setGameImage(file);

            // Предпросмотр изображения
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const saveGame = async () => {
        if (!gameImage || !gameTitle || !gameDescription) {
            alert("Пожалуйста, заполните все обязательные поля: изображение, название и описание игры.");
            return;
        }

        const gameData = {
            // image: previewImage, // Сохраняем предпросмотр в виде Base64
            title: gameTitle,
            description: gameDescription,
            categories: categories
        };

        try {
            const response = await addGameApi(gameData);
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }

        onSave(gameData);
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
                    <button
                        type="button"
                        className={modalStyles.addSubcategoryBtn}
                        onClick={() => addCategory(category.subcategories)}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        className={modalStyles.deleteCategoryBtn}
                        onClick={() => deleteCategory(parentCategories, index)}
                    >
                        -
                    </button>
                </div>
                <div className={modalStyles.nestedSubcategories}>
                    {renderCategories(category.subcategories)}
                </div>
            </div>
        ));

    return (
        <ModalTemplate
            modalClassName={modalStyles.modal}
            isOpen={isOpen}
            title="Добавить игру"
            content={
                <div>
                    <label htmlFor="gameImage">Изображение игры:</label>
                    <input
                        type="file"
                        id="gameImage"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                    />
                    {previewImage && (
                        <div>
                            <img src={previewImage} alt="Preview"/>
                        </div>
                    )}

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
                        <button
                            type="button"
                            className={modalStyles.addCategoryBtn}
                            onClick={() => addCategory(categories)}
                        >
                            Добавить категорию
                        </button>
                    </div>
                </div>
            }
            actions={
                <div>
                    <button className={modalStyles.saveBtn} onClick={saveGame}>
                        Сохранить
                    </button>
                </div>
            }
            onClose={onClose}
        />
    );
};

export default AddGameModal;