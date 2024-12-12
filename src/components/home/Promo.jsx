import React from "react";

const Promo = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.head}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default Promo;