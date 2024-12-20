import {useEffect, useState} from "react";
import ServiceCard from "../card/ServiceCard.jsx";
import EditServiceModal from "../modal/EditServiceModal.jsx";
import AddServiceModal from "../modal/AddServiceModal.jsx";
import styles from "./ServiceSection.module.css";
import {getAllGamesApi} from "../../../../api/gamesApi.jsx";
import {addServiceApi, getAllServicesApi} from "../../../../api/servicesApi.jsx";

const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedService, setSelectedService] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const getServices = async (pageNumber = 1) => {
        const requestData = { pageNumber: pageNumber, pageSize: 10 };

        try {
            const response = await getAllServicesApi(requestData);
            setServices(response); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    }

    const getGames = async () => {
        try {
            const response = await getAllGamesApi();
            setGames(response); // Сохраняем полученные игры в состоянии
        } catch (err) {
            console.error('Ошибка при получении игр:', err);
        }
    };

    const addService = async (formData) => {
        try {
            const response = await addServiceApi(formData);
            if (response.status === 200) {
                alert("Услуга успешно сохранена!");
            }
        } catch (error) {
            console.error("Ошибка при сохранении услуги:", error);
            alert("Произошла ошибка при сохранении услуги. Попробуйте ещё раз.");
        }
        closeAddModal();
    };

    const openEditModal = (service) => {
        setSelectedService(service);
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setSelectedService(null);
        setIsEditModalOpen(false);
    };

    const openAddModal = () => {
        setIsAddModalOpen(true);
    };

    const closeAddModal = () => {
        setSelectedService(null);
        setIsAddModalOpen(false);
    };

    const updateService = (updatedService) => {
        setServices((prevServices) =>
            prevServices.map((service) =>
                service.id === updatedService.id ? updatedService : service
            )
        );
        closeEditModal();
    };

    useEffect(() => {
        getGames();
        getServices();
    }, []);

    return (
        <div className={styles.serviceSection}>
            <div className={styles.filterContainer}>
                <input
                    type="text"
                    placeholder="Search by Service Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className={styles.addNewService} onClick={openAddModal}>
                    + Add New Service
                </button>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                        onEdit={() => openEditModal(service)}
                    />
                ))}
            </div>

            {isEditModalOpen && selectedService && (
                <EditServiceModal
                    isOpen={isEditModalOpen}
                    service={selectedService}
                    onClose={closeEditModal}
                    onSave={updateService}
                    games={games} // Передаём список игр
                />
            )}

            {isAddModalOpen && (
                <AddServiceModal
                    isOpen={isAddModalOpen}
                    onClose={closeAddModal}
                    onSave={addService}
                    games={games}
                />
            )}
        </div>
    );
};

export default ServiceSection;