import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

interface IGallery {
  images: string[];
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
      {images.map((image, index) => (
        <Box
          sx={{ width: 500, height: 500, backgroundColor: 'gray' }}
          key={index}
        >
          <img
            style={{ width: 500, height: 500, objectFit: 'contain' }}
            src={image}
            role="presentation"
            alt=""
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default Gallery;
