import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import OfferInfo from '../layouts/offer/OfferInfo';
import OfferPayment from '../layouts/offer/OfferPayment';
import { getOfferData, getOptions } from "src/services/option.jsx";

const OfferPage = () => {
    const { offerId } = useParams();
    const [options, setOptions] = useState([]); // Начальное значение - пустой массив
    const [offerData, setOfferData] = useState(null); // Начальное значение - null

    useEffect(() => {
        if (!offerId) return; // Если offerId нет, не делаем запрос

        const fetchData = async () => {
            try {
                const [optionsData, offerData] = await Promise.all([
                    getOptions(offerId),
                    getOfferData(offerId),
                ]);
                setOptions(optionsData);
                setOfferData(offerData);
            } catch (err) {
                console.error('Ошибка при загрузке данных:', err);
            }
        };

        fetchData();
    }, [offerId]);// Зависимость от offerId, чтобы перезагружать данные при изменении

    if (!offerData || !options.length) {
        return <div>Загрузка...</div>; // Лоадер, пока данные не загружены
    }

    return (
        <Box className="flex items-center justify-center flex-col lg:items-start lg:flex-row" sx={{ mx: 2 }}>
            <Box sx={{ pl: 20 }}>
                <OfferInfo offerData={offerData} />
            </Box>
            <Box className="pl-20">
                <OfferPayment optionsBlocks={options} />
            </Box>
        </Box>
    );
};

export default OfferPage;