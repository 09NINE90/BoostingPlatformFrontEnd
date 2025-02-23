import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Button, Chip} from '@mui/material';
import { games, offersList, offersListRaids } from './HomeData';
import { Link, NavLink } from 'react-router';

const OffersList = ({gameId}) => {
    const [currentCategory, setCurrentCategory] = useState(null);
    const [offers, setOffers] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const game = (games.find((e) => e.id == gameId))
        setCategories(game.categories);
    }, [gameId]);

    useEffect(() => {
      const getOffers = async () => {
            const newOffers = offersListRaids;
            setOffers(offersList);
      };

      getOffers();
    }, [currentCategory]);

  return (
    <Box sx={{ padding: 2, flex: "1"}}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {games[0].name} Offers
      </Typography>

      <Box sx={{ display: 'flex', overflowX: 'auto', marginBottom: 3 }}>
        {categories.map((subcategory) => (
          <Chip
            key={subcategory.id}
            label={subcategory.name}
            clickable
            onClick={() => setCurrentCategory(subcategory.id)}
            sx={{ marginRight: 1 }}
          />
        ))}
      </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 2, gridAutoRows: 'auto' }}>
            {offers.map((offer) => (
            <NavLink
                to={`/api/offer/${offer.id}`}
            >
                <Card key={offer.id} sx={{ 'maxWidth': '300px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <CardMedia
                    component="img"
                    image={offer.image}
                    alt={offer.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h6">{offer.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                            {offer.description}
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: 1 }}>
                        <Typography variant="body1" color="secondary">
                            ${offer.price}
                        </Typography>
                        <Button variant="contained" color="primary">
                            Buy Now
                        </Button>
                    </Box>
                </Card>
            </NavLink>
            ))}
        </Box>
    </Box>
  )
}

export default OffersList