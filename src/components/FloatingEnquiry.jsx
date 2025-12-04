import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingEnquiry = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 30,
        right: 30,
        display: "flex",
        alignItems: "center",
        gap: 2,
        zIndex: 1000,
      }}
    >
      {/* Enquire Button Outer Glow */}
      <Box
        sx={{
          background: "#72225f",
          padding: "10px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Inner Button */}
        <Button
          sx={{
            backgroundColor: "#d441a1",
            borderRadius: "50px",
            padding: "10px 30px",
            display: "flex",
            alignItems: "center",
            color: "#fff",
            textTransform: "none",
            fontSize: "18px",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#c73892",
            },
          }}
        >
          <Box
            sx={{
              background: "#4d103b",
              width: 35,
              height: 35,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
            }}
          >
            <MailIcon sx={{ fontSize: 20, color: "#fff" }} />
          </Box>
          Enquire Now!
        </Button>
      </Box>

      {/* WhatsApp Floating Button */}
      <IconButton
        sx={{
          width: 65,
          height: 65,
          backgroundColor: "#32CD32",
          borderRadius: "50%",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          "&:hover": {
            backgroundColor: "#28b828",
          },
        }}
      >
        <WhatsAppIcon sx={{ color: "#fff", fontSize: 35 }} />
      </IconButton>
    </Box>
  );
};

export default FloatingEnquiry;
