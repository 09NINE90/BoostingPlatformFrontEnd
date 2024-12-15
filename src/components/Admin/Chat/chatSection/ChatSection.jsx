import React, { useState } from "react";
import styles from "./ChatSection.module.css";

const ChatSection = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [chats, setChats] = useState([
        { id: 1, orderId: "ZX24Z", type: "customer", lastMessage: "I'm still waiting", timestamp: "12:36 12.12.24" },
        { id: 2, orderId: "AB12C", type: "booster", lastMessage: "Booster is here", timestamp: "14:20 12.12.24" },
        { id: 3, orderId: "AR56X", type: "archive", lastMessage: "Archived chat", timestamp: "10:15 10.12.24" },
        { id: 4, orderId: "XY78Z", type: "customer", lastMessage: "Customer inquiry", timestamp: "11:00 11.12.24" },
    ]);
    const [selectedChat, setSelectedChat] = useState(null);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const filteredChats = chats.filter((chat) => activeFilter === "all" || chat.type === activeFilter);

    console.log("Filtered chats:", filteredChats);

    return (
        <div className={styles.mainContent}>
            <div className={styles.chatFilters}>
                {["all", "customer", "booster", "archive"].map((filter) => (
                    <button
                        key={filter}
                        className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                        onClick={() => handleFilterChange(filter)}
                    >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)} Chats
                    </button>
                ))}
            </div>
            <div className={styles.chatLayout}>
                <div className={styles.chatList}>
                    <ul>
                        {filteredChats.map((chat) => (
                            <li
                                key={chat.id}
                                className={`${styles.chatItem} ${selectedChat?.id === chat.id ? styles.active : ""}`}
                                onClick={() => setSelectedChat(chat)}
                            >
                                <h4>Order ID: {chat.orderId}</h4>
                                <p>Last Message: {chat.lastMessage}</p>
                                <span>{chat.timestamp}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.chatWindow}>
                    {selectedChat ? (
                        <>
                            <div className={styles.chatMessages}>
                                <div className={styles.message}>Hey! <span className={styles.time}>12:45 PM</span></div>
                                <div className={styles.message}>Hello! <span className={styles.time}>12:46 PM</span></div>
                            </div>
                            <div className={styles.chatInput}>
                                <input type="text" placeholder="Write a message..." />
                                <button>&rarr;</button>
                            </div>
                        </>
                    ) : (
                        <p className={styles.selectPrompt}>Select a chat to view messages</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatSection;
