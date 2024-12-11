import classes from './Button.module.css'

export default function Button({children, isActive, ...props}) {

    console.log(classes)
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
