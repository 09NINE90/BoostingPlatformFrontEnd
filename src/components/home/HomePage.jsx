import React from "react";
import {promoList} from './HomeData';
import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <main>
                <section className="promo">
                    <Promo className='promo-left'  {...promoList[0]}/>
                    <div className="promo-center">
                        <img
                            src="http://localhost:9000/orders-images/8c8fa318-627b-41d3-884c-c43b677c05f2-kaktus_neon_temnyj_163081_3840x2160.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=minio%2F20241205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241205T183637Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=1d17870300ba93fc0fff0e33f272b77bc453d0e0eb9ecd6861a813d5bfb7e6b1"
                            alt="The Final Shape Promo"/>
                    </div>
                    <Promo className='promo-right' {...promoList[1]}/>
                </section>
            </main>
        </>
    );
};

function Promo(props) {
    return (
        <div className={props.className}>
            <h3>{props.head}</h3>
            <p>{props.body}</p>
        </div>
    )
}