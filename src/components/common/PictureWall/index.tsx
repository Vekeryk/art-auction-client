import React, { ChangeEvent, useState } from 'react';

import { v4 as uuid } from 'uuid';
import { Box, Button, IconButton, Paper } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';

import { ImagePreview } from '../../../types.ts';

const PictureWall: React.FC = () => {
  const [files, setFiles] = useState<ImagePreview[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = event.target.files;
    if (targetFiles && targetFiles.length) {
      const file = targetFiles[0];
      const url = URL.createObjectURL(file);
      setFiles([...files, { id: uuid(), img: url, title: file.name }]);
    }
  };

  const handleDelete = (fileId: string) => {
    setFiles(files.filter(({ id }) => id !== fileId));
  };

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
      {files.map((file) => (
        <Paper
          key={file.id}
          sx={{ width: 215, height: 150, position: 'relative' }}
        >
          <img
            src={file.img}
            alt={file.title}
            loading="lazy"
            style={{ objectFit: 'cover', ...imageSize }}
          />
          <IconButton
            onClick={() => handleDelete(file.id)}
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
