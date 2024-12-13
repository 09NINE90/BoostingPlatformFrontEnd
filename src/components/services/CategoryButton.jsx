import './Services.css';

const CategoryButton = ({category, handleCategoryClick, activeCategory}) => {
    const isActive = activeCategory && activeCategory.name === category.name;

    return (
        <button
            className={`category-button ${isActive ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
        >
            {category.name}
        </button>
    );
};

export default CategoryButton;
