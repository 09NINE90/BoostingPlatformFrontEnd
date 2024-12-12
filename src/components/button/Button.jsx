import classes from './Button.module.css'
import React from "react";

const Button = ({children, isActive, ...props}) => {
    return (
        <button
            {...props}
            className={
                isActive ? `${classes.button} ${classes.active}` : classes.button
            }>
            {children}
        </button>
    )
}

export default Button;
