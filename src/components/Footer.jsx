import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CloseIcon from "@mui/icons-material/Close";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  // All quick link items
  const links = [
    "NRI Services",
    "News",
    "Events",
    "About",
    "Awards",
    "Careers",
    "Terms",
    "Privacy",
    "FAQs",
    "Sitemap",
    "Our Services",
    "Contact",
  ];

  // Split 6 + 6 for mobile view
  const leftLinks = links.slice(0, 6);
  const rightLinks = links.slice(6, 12);

  return (
    <Box
      sx={{
        background: "#1a121aff",
        color: "#fff",
        pt: 8,
        pb: 4,
        px: { xs: 3, md: 12, lg: 18 },
      }}
    >

      {/* TOP GRID ROW */}
      <Grid container spacing={6} sx={{ justifyContent: "space-between" }}>

        {/* ABOUT US */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography fontSize={28} fontWeight={700} mb={2}>
            About Us
          </Typography>

          <Typography
            fontSize={16}
            sx={{
              lineHeight: 1.7,
              opacity: 0.9,
              maxWidth: { xs: "100%", md: "95%" },
              mx: { xs: "auto", md: "0" },
            }}
          >
            360 Realtors is a company with rich experience in real estate advisory
            that believes each real estate experience should be a simple and successful
            execution from a Dream to Reality. Our team of Real Estate advisors is driven
            by customer satisfaction, credibility, and professionalism.
          </Typography>
        </Grid>

        {/* QUICK LINKS */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>

          {/* CENTERED HEADING */}
          <Typography fontSize={28} fontWeight={700} mb={2}>
            Quick Links
          </Typography>

          {/* MOBILE 6×6 CENTERED GRID */}
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
              width: "100%",
              mt: 1,
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "auto auto", // two columns tightly packed
                justifyContent: "center", // center whole grid
                justifyItems: "center", // center items inside each column
                textAlign: "center",
                columnGap: 30,
                rowGap: 1.5,
                width: "fit-content",
                mx: "auto",
              }}
            >
              {/* LEFT COLUMN */}
              <Box>
                {leftLinks.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      opacity: 0.9,
                      cursor: "pointer",
                      mb: 1,
                      "&:hover": { color: "#ff4081" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>

              {/* RIGHT COLUMN */}
              <Box>
                {rightLinks.map((item) => (
                  <Typography
                    key={item}
                    sx={{
                      opacity: 0.9,
                      cursor: "pointer",
                      mb: 1,
                      "&:hover": { color: "#ff4081" },
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>

          {/* DESKTOP VIEW (UNCHANGED) */}
          <Box
            sx={{
              display: { xs: "none", md: "grid" },
              gridTemplateColumns: "1fr 1fr",
              columnGap: 6,
              rowGap: 1.5,
            }}
          >
            {links.map((item) => (
              <Typography
                key={item}
                sx={{
                  opacity: 0.9,
                  cursor: "pointer",
                  "&:hover": { color: "#ff4081", transition: "0.3s" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        </Grid>

        {/* CONNECT WITH US */}
        <Grid item xs={12} md={3} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Typography fontSize={28} fontWeight={700} mb={2}>
            Connect with us
          </Typography>

          <Typography sx={{ opacity: 0.9, mb: 1 }}>
            support@360realtors.com
          </Typography>
          <Typography sx={{ opacity: 0.9, mb: 3 }}>
            info@360realtors.com
          </Typography>

          <Typography fontSize={20} fontWeight={700} mb={1.5}>
            Follow us on
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: 2,
            }}
          >
            <IconButton sx={{ color: "#fff" }}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton sx={{ color: "#fff" }}>
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* BOTTOM BORDER */}
      <Box
        sx={{
          mt: 8,
          borderTop: "1px solid rgba(255,255,255,0.24)",
          pt: 3,
        }}
      >
        <Typography
          textAlign="center"
          sx={{ opacity: 0.8, fontSize: { xs: 14, md: 16 } }}
        >
          © {new Date().getFullYear()} 360 Realtors. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
