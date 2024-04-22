import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { LotImage } from '../../../types.ts';

interface IGallery {
  images: LotImage[];
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  return (
    <Carousel
      animation="slide"
      cycleNavigation
      navButtonsAlwaysVisible
      autoPlay={false}
      sx={{ width: 500 }}
    >
      {images.map((image) => (
        <Box
          sx={{ width: 500, height: 500, backgroundColor: 'gray' }}
          key={image.id}
        >
          <img
            style={{ width: 500, height: 500, objectFit: 'contain' }}
            src={image.imageUrl}
            role="presentation"
            alt=""
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default Gallery;
