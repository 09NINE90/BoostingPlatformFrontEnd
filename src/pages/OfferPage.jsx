import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import OfferInfo from '../layouts/offer/OfferInfo';
import { offerData, optionsData } from '../layouts/offer/offerData';
import OfferPayment from '../layouts/offer/OfferPayment';
import {getOptions} from "src/services/option.jsx";

const OfferPage = () => {
    const {offerId} = useParams();
    const [options, setOptions] = useState([]);

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                const results = await getOptions();
                setOptions(results);
                console.log('Полученные данные:', results);
            } catch (err) {
                console.error('Ошибка при загрузке:', err);
            }
        };

        fetchOptions();
    }, []);

    return (
        <>
            <Box className="flex items-center justify-center flex-col lg:items-start lg:flex-row" sx={{mx: 2}}>
                <Box sx={{pl: 20}}>
                    <OfferInfo offerData={offerData.offer}/>
                </Box>
                <Box className="pl-20">
                    <OfferPayment optionsBlocks={options}/>
                </Box>
            </Box>
        </>
    )
}

export default OfferPage