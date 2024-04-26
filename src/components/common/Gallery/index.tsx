import React from 'react';

import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';
import { LotImage } from '../../../types.ts';
import { getPicturePath } from '../../../utils/lots.ts';

interface IGallery {
  images: LotImage[];
}

const Gallery: React.FC<IGallery> = ({ images }) => {
  return (
    <Carousel
      animation="slide"
      cycleNavigation
      navButtonsAlwaysVisible
      navButtonsAlwaysInvisible={images.length === 1}
      autoPlay={false}
      sx={{ width: '100%' }}
    >
      {images.map(({ id, image }) => (
        <Box
          key={id}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            height: 500,
            backgroundColor: 'gray',
            overflow: 'hidden',
          }}
        >
          <img
            style={{ maxWidth: '100%', objectFit: 'contain' }}
            src={getPicturePath(image)}
            role="presentation"
            alt=""
          />
        </Box>
      ))}
    </Carousel>
  );
};

export default Gallery;
