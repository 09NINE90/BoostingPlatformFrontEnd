import React, { useState } from "react";
import UserItem from "../userItem/UserItem.jsx";
import UserModal from "../userModal/UserModal.jsx";
import MiniModal from "../userModal/MiniModal.jsx";
import styles from "./UserSection.module.css";

const UsersSection = () => {
    const [users] = useState([
        {
            id: 1,
            nickname: "JohnDoe",
            role: "Customer",
            registrationDate: "2023-11-25",
            amountOrders: 15,
            spentMoney: 1200,
        },
        {
            id: 2,
            nickname: "JaneSmith",
            role: "Booster",
            registrationDate: "2023-10-12",
            amountOrders: 20,
            spentMoney: 900,
        },
    ]);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [miniModalType, setMiniModalType] = useState(null);

    const openUserModal = (user) => {
        setSelectedUser(user);
        setIsUserModalOpen(true);
    };

    const closeUserModal = () => {
        setIsUserModalOpen(false);
        setSelectedUser(null);
    };

    const openMiniModal = (type) => {
        setMiniModalType(type);
    };

    const closeMiniModal = () => {
        setMiniModalType(null);
    };

    return (
        <section className={styles.usersSection}>
            <div className={styles.filterContainer}>
                <input type="text" placeholder="Nickname" />
                <input type="text" placeholder="Booster ID" />
                <select>
                    <option value="all">All Roles</option>
                    <option value="customer">Customer</option>
                    <option value="booster">Booster</option>
                    <option value="manager">Manager</option>
                    <option value="admin">Admin</option>
                </select>
                <button>Apply</button>
            </div>

            <div className={styles.usersList}>
                {users.map((user) => (
                    <UserItem
                        key={user.id}
                        user={user}
                        onClick={() => openUserModal(user)}
                    />
                ))}
            </div>

            {isUserModalOpen && selectedUser && (
                <UserModal
                    isOpen={isUserModalOpen}
                    user={selectedUser}
                    onClose={closeUserModal}
                    onOpenMiniModal={openMiniModal}
                />
            )}

            {miniModalType && (
                <MiniModal
                    type={miniModalType}
                    isOpen={!!miniModalType}
                    onClose={closeMiniModal}
                />
            )}
        </section>
    );
};

export default UsersSection;
