// src/ImageList.js
import React, { useState } from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ImageList = ({images}) => {

const theme = useTheme();
const isTablet = useMediaQuery(theme.breakpoints.up('sm'))
const isLaptopScreen = useMediaQuery(theme.breakpoints.up('md'));
const isDesktopScreen = useMediaQuery(theme.breakpoints.up('lg'));
const isLargeScreen = isTablet || isLaptopScreen || isDesktopScreen  

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="flex overflow-x-scroll space-x-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="w-72 h-48 object-cover rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(src)}
            />
          </div>
        ))}
      </div>

      <Modal open={isOpen} onClose={closeModal}>
        <Box
          className='aspect-square xl::w-1/3 lg:w-[50vh] md:w-[45vh] w-[45vh]'
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            overflow: 'auto',
          }}
        >
          <IconButton
            sx={{ position: 'absolute', top: 10, right: 10 }}
            onClick={closeModal}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-auto object-cover rounded-lg"
          />
        </Box>
      </Modal>
    </div>
  );
};

export default ImageList;
