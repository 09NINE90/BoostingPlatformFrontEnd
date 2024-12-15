import React from "react";
import PropTypes from "prop-types";
import styles from "./ServiceCard.module.css";

const ServiceCard = ({ service, onEdit }) => (
    <div className={styles.serviceCard}>
        <div className={styles.imageWrapper}>
            <img
                src={service.image}
                alt={service.name}
                className={styles.serviceImage}
            />
        </div>
        <div className={styles.serviceInfo}>
            <h3 className={styles.serviceName}>{service.name}</h3>
            <p className={styles.serviceGame}>
                <strong>Игра:</strong> {service.game}
            </p>
            <p className={styles.serviceDescription}>
                <strong>Описание:</strong> {service.description}
            </p>
            <p className={styles.servicePrice}>
                <strong>Стоимость:</strong> ${service.price.toFixed(2)}
            </p>
        </div>
        <button className={styles.editButton} onClick={onEdit}>
            ⚙️
        </button>
    </div>
);

ServiceCard.propTypes = {
    service: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        game: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default ServiceCard;
