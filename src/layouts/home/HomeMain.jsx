import React, { useState } from 'react'
import Promo from "./Promo"
import GameSideBar from './GameSideBar'
import OffersList from "./OffersList"
import { games } from './HomeData'

const HomeMain = () => {
    const [currentGameId, setCurrentGameId] = useState(games[0].id);
    return (
        <div className='flex flex-col bg-background'>
            <Promo />
            <div className='flex flex-row gap-5'>
                <GameSideBar gameList={games} currentGame={currentGameId} setCurrentGame={setCurrentGameId}/>
                <OffersList gameId={currentGameId}/>
            </div>
        </div>
    );
}

export default HomeMain