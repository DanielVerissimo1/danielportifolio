import React, { useState } from "react";
import { Modal, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

interface CertificateProps {
  ImgSertif: string; 
}

const Certificate: React.FC<CertificateProps> = ({ ImgSertif }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ width: "100%" }}>
      
      <Box
        sx={{
          position: "relative",
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "pointer",
          boxShadow: 1,
          transition: "transform 0.2s",
          "&:hover": {
            transform: "scale(1.02)",
            boxShadow: 3,
          },
        }}
        onClick={handleOpen}
      >
        <img
          src={ImgSertif}
          alt="Certificate"
          style={{
            width: "100%",
            height: "300px",
            display: "block",
            objectFit: "cover"
          }}
        />
        
        
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: "rgba(0,0,0,0.3)",
            opacity: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.2s",
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <FullscreenIcon sx={{ color: "white", fontSize: 40 }} />
        </Box>
      </Box>

     
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.9)",
          },
        }}
      >
        <Box sx={{ position: "relative", outline: "none" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              bgcolor: "rgba(0,0,0,0.6)",
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.8)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          
          <Box
            sx={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              overflow: "auto",
              bgcolor: "rgba(99, 102, 241, 0.5)",
              borderRadius: "8px",
              p: 1,
            }}
          >
            <img
              src={ImgSertif}
              alt="Certificado em Full View"
              style={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: "85vh",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Certificate;