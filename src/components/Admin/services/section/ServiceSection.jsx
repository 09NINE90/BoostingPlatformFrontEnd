import {useEffect, useState} from "react";
import ServiceCard from "../card/ServiceCard.jsx";
import EditServiceModal from "../modal/EditServiceModal.jsx";
import AddServiceModal from "../modal/AddServiceModal.jsx";
import styles from "./ServiceSection.module.css";
import axios from "axios";
const baseUrl = import.meta.env.VITE_API_BASE_URL;


const ServiceSection = () => {
    const [services, setServices] = useState([]);
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedService, setSelectedService] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const getAllServices = async (pageNumber = 1) => {
        const requestData = { pageNumber: pageNumber, pageSize: 10 };

        try {
            const response = await axios.post(`${baseUrl}/orders/getAllOrders`, requestData, { withCredentials: true });
            setServices(response.data.baseOrder); // Сохраняем полученные заказы в состоянии
        } catch (err) {
            console.error('Ошибка при получении заказов:', err);
        }
    }

    const getAllGames = async () => {
        try {
            const response = await axios.get(`${baseUrl}/games/getAllGames`, { withCredentials: true });
            console.log(JSON.stringify(response.data, null, 2))

            setGames(response.data); // Сохраняем полученные игры в состоянии
        } catch (err) {
            console.error('Ошибка при получении игр:', err);
        }
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

    const addService = async (formData) => {
        try {
            const response = await axios.post(`${baseUrl}/orders/addNewOrder`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                alert("Услуга успешно сохранена!");
            }
        } catch (error) {
            console.error("Ошибка при сохранении услуги:", error);
            alert("Произошла ошибка при сохранении услуги. Попробуйте ещё раз.");
        }
        closeAddModal();
    };

    useEffect(() => {
        getAllGames();
        getAllServices();
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