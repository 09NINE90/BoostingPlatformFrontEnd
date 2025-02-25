import React from 'react'
import { useParams } from 'react-router'
import Box from '@mui/material/Box';
import OfferInfo from '../layouts/offer/OfferInfo';
import { offerData, optionsData } from '../layouts/offer/offerData';
import OfferPayment from '../layouts/offer/OfferPayment';

const OfferPage = () => {
    const {offerId} = useParams();
    return (
        <>
            <Box className="flex items-center justify-center flex-col lg:items-start lg:flex-row" sx={{mx: 2}}>
                <Box sx={{pl: 20}}>
                    <OfferInfo offerData={offerData.offer}/>
                </Box>
                <Box className="pl-20">
                    <OfferPayment optionsBlocks={optionsData}/>
                </Box>
            </Box>
        </>
    )
}

export default OfferPage