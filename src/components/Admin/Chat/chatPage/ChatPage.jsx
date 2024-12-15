import React from "react";
import Header from "../../header/Header.jsx";
import Sidebar from "../../sidebar/Sidebar.jsx";
import ChatSection from "../chatSection/ChatSection.jsx";
import styles from "./ChatPage.module.css";

const ChatPage = () => {
    console.log("ChatPage rendered");
    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <Sidebar active="live-chats" />
                <ChatSection />
            </div>
        </div>
    );
};

export default ChatPage;
