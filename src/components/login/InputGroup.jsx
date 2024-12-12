import React from "react";
import styles from "./InputGroup.module.css";

const InputGroup = (props) => {
    const { type, value, onChange, title } = props;
    return (
        <div className={styles.inputGroup}>
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder=" "
                autoComplete="off"
                className={styles.input}
            />
            <label className={styles.label}>{title}</label>
        </div>
    );
};

export default InputGroup;