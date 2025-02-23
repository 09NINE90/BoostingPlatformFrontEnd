import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';

const GameSideBar = ({gameList, currentGame, setCurrentGame}) => {

  return (
    <div className="hidden md:flex p-4">
      <List color="primary">
        {gameList.map((game) => (
          <div key={game.id}>
            <ListItem
              button
              onClick={() => setCurrentGame(game.id)}
              sx={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center', 
                backgroundColor: currentGame === game.id ? '#1e2530' : 'transparent',
                color: currentGame === game.id ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: currentGame === game.id ? '#1e2530' : '#3c434e',
                  cursor: 'pointer',
                },
              }}
            >
              <ListItemText primary={game.name} />
              <ListItemIcon><ChevronRightIcon /></ListItemIcon>
            </ListItem>
            <Divider />
          </div>
        ))}
      </List>
    </div>
  )
}

export default GameSideBar