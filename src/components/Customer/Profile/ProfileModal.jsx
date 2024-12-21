import React from "react";
import ModalTemplate from "../../ModalTemplate/ModalTemplate.jsx"; // Шаблон модального окна
import PropTypes from "prop-types";

const Modal = ({ isOpen, order, onClose }) => {
    const content = (
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ flex: 1 }}>
                <h3>Order Information</h3>
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>Game:</strong> {order.game}</p>
                <p><strong>Service:</strong> {order.service}</p>
                <p>
                    <strong>Session:</strong>{" "}
                    <span style={{ color: order.session === "ACTIVE" ? "#4caf50" : "#f44336" }}>
                        {order.session}
                    </span>
                </p>
                <p><strong>Last message:</strong> {order.lastMessage}</p>
            </div>
            <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
                <h3>Chat</h3>
                <div
                    style={{
                        flex: 1,
                        backgroundColor: "#232234",
                        padding: "10px",
                        borderRadius: "8px",
                        overflowY: "auto",
                        marginBottom: "10px",
                    }}
                >
                    <p
                        style={{
                            background: "#6a6ad8",
                            padding: "10px",
                            borderRadius: "5px",
                            color: "#fff",
                        }}
                    >
                        {order.lastMessage}
                    </p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                    <input
                        type="text"
                        placeholder="Write a message..."
                        style={{
                            flex: 1,
                            padding: "10px",
                            borderRadius: "8px",
                            backgroundColor: "#1c1b29",
                            color: "#fff",
                            border: "1px solid #3a3950",
                        }}
                    />
                    <button
                        style={{
                            padding: "10px 15px",
                            backgroundColor: "#ff4c4c",
                            color: "#fff",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );

    const actions = (
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <button
                onClick={onClose}
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#4caf50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                }}
            >
                Close
            </button>
        </div>
    );

    return (
        <ModalTemplate
            isOpen={isOpen}
            content={content}
            actions={actions}
            onClose={onClose}
        />
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    order: PropTypes.shape({
        id: PropTypes.number,
        game: PropTypes.string,
        service: PropTypes.string,
        session: PropTypes.string,
        lastMessage: PropTypes.string,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;
