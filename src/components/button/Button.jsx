import classes from './Button.module.css'
import React from "react";

export default function Button({children, isActive, ...props}) {
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
