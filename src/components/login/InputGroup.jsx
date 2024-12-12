import React from "react";

const InputGroup = (props) => {
    const {type, value, onChange, title} = props;
    return (
        <div className="input-group">
            <input
                type={type}
                value={value}
                onChange={onChange}
                required
                placeholder=" "
                autoComplete="off"
            />
            <label>{title}</label>
        </div>
    )
}

export default InputGroup;