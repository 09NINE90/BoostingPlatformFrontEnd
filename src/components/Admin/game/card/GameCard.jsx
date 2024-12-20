import PropTypes from "prop-types";
import styles from "./GameCard.module.css";

const GameCard = ({ id, image, title, description, categories, onEditClick }) => (
    <div className={styles.gameItem} data-id={id}>
        <img src={image} alt={title} className={styles.gameThumbnail} />
        <div className={styles.gameInfo}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <button className={styles.settingsBtn} onClick={() => onEditClick({ id, title, description, categories })}>
            ⚙️
        </button>
    </div>
);

GameCard.propTypes = {
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    categories: PropTypes.array.isRequired,
    onEditClick: PropTypes.func.isRequired,
};

export default GameCard;