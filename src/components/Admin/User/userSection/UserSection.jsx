import React, { useState } from "react";
import UserItem from "../userItem/UserItem.jsx";
import UserModal from "../userModal/UserModal.jsx";
import styles from "./UserSection.module.css";

const UsersSection = () => {
    const [users] = useState([
        {
            id: 1,
            nickname: "JohnDoe",
            role: "customer",
            registrationDate: "2023-11-25",
            amountOrders: 15,
            spentMoney: 1200,
        },
        {
            id: 2,
            nickname: "JaneSmith",
            role: "booster",
            registrationDate: "2023-10-12",
            amountOrders: 20,
            spentMoney: 900,
        },
    ]);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);

    // Второй UserModal
    const [secondModalUser, setSecondModalUser] = useState(null);
    const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

    const openUserModal = (user) => {
        setSelectedUser(user);
        setIsUserModalOpen(true);
    };

    const closeUserModal = () => {
        setIsUserModalOpen(false);
        setSelectedUser(null);
    };

    // const openSecondModal = (user) => {
    //     setSecondModalUser(user);
    //     setIsSecondModalOpen(true);
    // };

    const closeSecondModal = () => {
        setIsSecondModalOpen(false);
        setSecondModalUser(null);
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
                <button className={styles.applyBtn}>Apply</button>
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

            {/* Основной UserModal */}
            {isUserModalOpen && selectedUser && (
                <UserModal
                    isOpen={isUserModalOpen}
                    user={selectedUser}
                    onClose={closeUserModal}
                />
            )}

            {/* Второй UserModal */}
            {isSecondModalOpen && secondModalUser && (
                <UserModal
                    isOpen={isSecondModalOpen}
                    user={secondModalUser}
                    onClose={closeSecondModal}
                />
            )}
        </section>
    );
};

export default UsersSection;
