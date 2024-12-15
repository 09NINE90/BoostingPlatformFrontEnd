import React, { useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard.jsx";
import EditServiceModal from "../serviceModal/EditServiceModal.jsx";
import AddServiceModal from "../serviceModal/AddServiceModal.jsx";
import styles from "./ServiceSection.module.css";

const ServiceSection = () => {
    const [services, setServices] = useState([
        {
            id: 1,
            image: "/assets/bo.png",
            game: "League of Legends",
            name: "Boosting Service",
            description: "We will boost your rank quickly and safely.",
            price: 49.99,
            categories: ["Ranked", "Solo Queue"],
        },
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedService, setSelectedService] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const games = [
        {
            id: 1,
            name: "League of Legends",
            categories: [
                { name: "Ranked", subcategories: [{ name: "Solo Queue", subcategories: [] }] },
                { name: "Normal", subcategories: [] },
            ],
        },
        {
            id: 2,
            name: "Valorant",
            categories: [
                { name: "Competitive", subcategories: [] },
                { name: "Unrated", subcategories: [] },
            ],
        },
    ];

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

    const addService = (newService) => {
        setServices((prevServices) => [
            ...prevServices,
            { ...newService, id: new Date().getTime() }, // Генерируем уникальный ID
        ]);
        closeAddModal();
    };

    const filteredServices = services.filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                {filteredServices.map((service) => (
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
