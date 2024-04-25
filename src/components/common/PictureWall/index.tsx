import React from 'react';

import { Box, Button, IconButton, Paper } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';

import { LotImage } from '../../../types.ts';
import { getPicturePath } from '../../../utils/lots.ts';

interface IPictureWall {
  lotImages: LotImage[];
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleDelete: (fileId: string) => void;
}

const PictureWall: React.FC<IPictureWall> = ({
  lotImages,
  handleFileChange,
  handleDelete,
}: IPictureWall) => {
  const imageSize = { width: 215, height: 150 };
  return (
    <Box
      sx={{
        marginTop: 2,
        display: 'flex',
        flexWrap: 'wrap',
        rowGap: 2,
        columnGap: 2,
      }}
    >
      {lotImages.map((lotImage) => (
        <Paper
          key={lotImage.id}
          sx={{ width: 215, height: 150, position: 'relative' }}
        >
          <img
            src={getPicturePath(lotImage.image)}
            alt=""
            loading="lazy"
            style={{ borderRadius: 4, objectFit: 'cover', ...imageSize }}
          />
          <IconButton
            onClick={() => handleDelete(lotImage.id)}
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              color: 'black',
              background: 'white',
              size: 'small',
            }}
            disableRipple
          >
            <DeleteIcon />
          </IconButton>
        </Paper>
      ))}
      <Button
        variant="outlined"
        component="label"
        sx={imageSize}
        endIcon={<AddAPhotoIcon />}
      >
        Додати фото
        <input
          type="file"
          role={undefined}
          hidden
          onChange={handleFileChange}
        />
      </Button>
    </Box>
  );
};

export default PictureWall;
