import PropTypes from "prop-types";
import styles from "./GameCard.module.css";

const GameCard = ({ id, imageUrl, title, description, categories, onEditClick }) => (
    <div className={styles.gameItem} data-id={id}>
        <div className={styles.imageWrapper}>
            <img
                src={imageUrl}
                alt={title}
                className={styles.gameImage}
            />
        </div>
        <div className={styles.gameInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button className={styles.settingsBtn} onClick={() => onEditClick({id, title, description, categories})}>
            ⚙️
        </button>
    </div>
);

GameCard.propTypes = {
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    onEditClick: PropTypes.func.isRequired,
};

export default GameCard;