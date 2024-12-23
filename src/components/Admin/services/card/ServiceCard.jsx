import PropTypes from "prop-types";
import styles from "./ServiceCard.module.css";
import SettingsIcon from '@mui/icons-material/Settings';

const ServiceCard = ({ service, onEdit }) => (
    <div className={styles.serviceCard}>
        <div className={styles.imageWrapper}>
            <img
                src={service.imageUrl}
                alt={service.title}
                className={styles.serviceImage}
            />
        </div>
        <div className={styles.serviceInfo}>
            <h3 className={styles.serviceName}>{service.title}</h3>
            <p className={styles.serviceGame}>
                <strong>Игра:</strong> {service.game.title}
            </p>
            <p className={styles.serviceDescription}>
                <strong>Описание:</strong> {service.description}
            </p>
            <p className={styles.servicePrice}>
                <strong>Стоимость:</strong> ${service.basePrice.toFixed(2)}
            </p>
        </div>
        <button className={styles.editButton} onClick={onEdit}>
            <SettingsIcon/>
        </button>
    </div>
);

ServiceCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        game: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        basePrice: PropTypes.number.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ServiceCard;