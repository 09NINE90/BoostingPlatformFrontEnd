import React, { useEffect, useState } from "react";
import promoList from "./HomeData";

const Promo = () => {

    const [promoBanners, setPromoBanners] = useState([]);

    const createBanner = (imageUrl, title, content, styles) => {
        return (
            <div className="flex-1">
                {(imageUrl) ? 
                    <img className={`rounded-xl object-cover w-full h-full ${styles}`} src={imageUrl}/>
                : 
                    <div className={`flex p-4 flex-col w-full h-full items-center bg-surface ${styles}`}>
                        {title && <h1 className="items-center mb-4">{title}</h1>}
                        {content && 
                            <div className="items-left p-4">
                                {content}
                            </div>
                        }
                    </div>
                }
            </div>
        );
    }

    const getPromoData = async () => {
        return promoList;
    }

    useEffect(() => {
        const getResult = async () => {
            const promoList = await getPromoData();
            setPromoBanners(promoList);
        }
        getResult()
    }, [])

    return (
        <div className="flex flex-row items-center justify-between m-5 gap-3">
            {
               promoBanners.map((bannerInfo) => (
                    createBanner(
                        bannerInfo.imageUrl,
                        bannerInfo.title,
                        bannerInfo.content,
                        "rounded-xl min-h-[300px] "
                    )
               ))
            }
        </div>
    )
}

export default Promo;