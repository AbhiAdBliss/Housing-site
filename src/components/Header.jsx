import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Menu,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import CallIcon from "@mui/icons-material/Call";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

/* SOCIAL ICONS */
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/X"; // X icon (Twitter)
import PinterestIcon from "@mui/icons-material/Pinterest";

const cityColumns = [
  ["Pune", "Hyderabad", "Lucknow", "Bhiwadi", "Himachal Pradesh", "Bahadurgarh", "Qatar", "Bhopal", "London", "Karnal", "Paphos", "Haridwar", "Molos"],
  ["NRI Services", "Noida", "Ahmedabad", "Mohali", "Ghaziabad", "Panipat", "Mangalore", "Rhodes", "Neemrana", "Heraklion", "Chania", "Punjab", "AIF"],
  ["Mumbai", "Kolkata", "Faridabad", "Meerut", "Nagpur", "Rajasthan", "Thane", "Multiple City", "Vadodara", "Kannur", "Patna", "Sonipat", "Maharashtra", "Kurukshetra"],
  ["Bangalore", "Goa", "Chandigarh", "Moradabad", "Indore", "Delhi", "Bahrain", "Ayodhya", "Kuwait", "Mount Abu", "Oman", "Cuttack", "Jammu"],
  ["Gurgaon", "Chennai", "Jaipur", "Dehradun", "Amritsar", "Dubai", "Rajkot", "Coimbatore", "Nashik", "Kochi", "Gorakhpur", "Kerala", "Mysore"],
];

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [toggleOpen, setToggleOpen] = useState(false);

  const openMenu = (event) => setAnchorEl(event.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  const openToggle = () => setToggleOpen(true);
  const closeToggle = () => setToggleOpen(false);

  return (
    <Box sx={{bgcolor:'fff'}}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "#fff",
          color: "#000",
          borderBottom: "1px solid #eee",
          py: 1,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <img src="/header-img.png" alt="360 Realtors" style={{ height: 45 }} />

            <Box
              onClick={openMenu}
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
              }}
            >
              <Typography fontSize={16}>India</Typography>
              <span style={{ fontSize: 14 }}>▼</span>
            </Box>
          </Box>

          {/* RIGHT */}
          <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 2, md: 3 } }}>
            <Box
              sx={{
                display: { xs: "flex", md: "none" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <CallIcon sx={{ fontSize: 22 }} />
              <FavoriteBorderIcon sx={{ fontSize: 22 }} />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                border: "1px solid #ccc",
                px: 2.5,
                py: 1,
                borderRadius: "30px",
                alignItems: "center",
                gap: 1.2,
              }}
            >
              <CallIcon fontSize="small" />
              <Typography fontSize={14}>IN 1800 1200 360</Typography>
              <img src="/flag-img.png" alt="flag" style={{ width: 22 }} />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              <ArticleOutlinedIcon fontSize="small" />
              <Typography fontSize={14}>Blog</Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 0.5 }}>
              <FavoriteBorderIcon fontSize="small" />
              <Typography fontSize={14}>Favourites</Typography>
            </Box>

            <IconButton onClick={openToggle} sx={{ p: 0.5 }}>
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* INDIA DROPDOWN */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        PaperProps={{
          sx: {
            p: 3,
            borderRadius: 2,
            minWidth: { xs: "100%", sm: 500, md: 900 },
            maxHeight: "85vh",
            overflowY: "auto",
            background: "#161016",
            color: "#fff",
          },
        }}
      >
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              background: "#e10098",
              px: 2,
              py: 1,
              borderRadius: "8px",
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            India <CheckIcon fontSize="small" />
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 3,
          }}
        >
          {cityColumns.map((col, colIndex) => (
            <Box key={colIndex}>
              {col.map((city, i) => (
                <Typography key={i} sx={{ mb: 1 }}>
                  {city}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Menu>

      {/* ----------------------------------------- */}
      {/*        RIGHT SIDE TOGGLE MENU DRAWER      */}
      {/* ----------------------------------------- */}

      <Drawer
        anchor="right"
        open={toggleOpen}
        onClose={closeToggle}
        PaperProps={{
          sx: {
            width: { xs: "85%", sm: "350px" },
            p: 3,
            background: "#1d1521",
            color: "#fff",
          },
        }}
      >
        {/* CLOSE BUTTON */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={closeToggle} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography fontSize={20} fontWeight={600}>
            India
          </Typography>

          <Box sx={{ borderBottom: "1px solid #3b313b", my: 2 }} />

          {/* EXPAND SECTIONS */}
          <Accordion sx={{ background: "transparent", color: "#fff" }} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#e10098" }} />}>
              <Typography sx={{ color: "#e10098", fontWeight: 500 }}>Buy Property by State</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Delhi</Typography>
              <Typography>Mumbai</Typography>
              <Typography>Punjab</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent", color: "#fff" }} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
              <Typography>Buy Property by City</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Pune</Typography>
              <Typography>Bangalore</Typography>
              <Typography>Chennai</Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ background: "transparent", color: "#fff" }} elevation={0}>
            <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}>
              <Typography>Curated Collections</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Luxury Homes</Typography>
              <Typography>Affordable Homes</Typography>
            </AccordionDetails>
          </Accordion>

          <Box sx={{ borderBottom: "1px solid #3b313b", my: 2 }} />

          {/* MID LINKS */}
          {[
            "NRI Services",
            "News",
            "Events",
            "Blogs",
            "Area Calculator",
            "Research",
          ].map((item) => (
            <Typography key={item} sx={{ mb: 2, fontSize: 16 }}>
              {item}
            </Typography>
          ))}

          <Box sx={{ borderBottom: "1px solid #3b313b", my: 2 }} />

          {/* FOOTER LINKS */}
          {[
            "About",
            "Awards",
            "Careers",
            "Terms",
            "Sitemap",
            "Privacy",
            "FAQs",
            "Contact",
          ].map((item) => (
            <Typography key={item} sx={{ mb: 2, fontSize: 16 }}>
              {item}
            </Typography>
          ))}

          {/* ----------------------------------------- */}
          {/*               HELP SECTION                 */}
          {/* ----------------------------------------- */}

          <Box sx={{ borderBottom: "1px solid #3b313b", my: 2 }} />

          <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 2 }}>
            Need any help?
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
            <CallIcon sx={{ fontSize: 20 }} />
            <Typography sx={{ fontSize: 16 }}>1800 1200 360</Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <ArticleOutlinedIcon sx={{ fontSize: 20 }} />
            <Typography sx={{ fontSize: 16 }}>support@360realtors.com</Typography>
          </Box>

          <Box sx={{ borderBottom: "1px solid #3b313b", my: 3 }} />

          {/* SOCIAL MEDIA SECTION */}
          <Typography sx={{ fontSize: 16, fontWeight: 500, mb: 2 }}>
            Follow Us
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <FacebookIcon sx={{ fontSize: 28 }} />
            <LinkedInIcon sx={{ fontSize: 28 }} />
            <InstagramIcon sx={{ fontSize: 28 }} />
            <YouTubeIcon sx={{ fontSize: 30 }} />
            <TwitterIcon sx={{ fontSize: 28 }} />
            <PinterestIcon sx={{ fontSize: 28 }} />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
