import React, { useState } from 'react'
import Promo from "./Promo"
import GameSideBar from './GameSideBar'
import OffersList from "./OffersList"
import { games } from './HomeData'
import { useParams } from 'react-router'

const HomeMain = () => {
    const {id} = useParams();
    return (
        <div className='flex flex-col'>
            <Promo />
            <div className='flex flex-row gap-5'>
                <GameSideBar gameList={games} currentGame={id}/>
                <OffersList gameId={id}/>
            </div>
        </div>
    );
}

export default HomeMain