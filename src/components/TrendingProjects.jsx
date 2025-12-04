import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
  Chip,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const projects = [
  {
    id: 1,
    title: "Adani Shantigram The Meadows",
    builder: "Adani Shantigram",
    location: "S G Highway, Ahmedabad",
    config: "2, 2.5, 3 BHK",
    size: "1458 SQ. FT.",
    price: "₹ 81.08 L - 1.05 Cr",
    img: "trendingp-image.png",
    rera: true,
  },
  {
    id: 2,
    title: "The Prestige City Hyderabad",
    builder: "Prestige Group",
    location: "Rajendra Nagar, Hyderabad",
    config: "2, 3 & 4 BHK",
    size: "3431 SQ. FT.",
    price: "₹ 1.25 Cr - 2.89 Cr",
    img: "trendingp-image1.png",
    rera: true,
    newLaunch: true,
  },
  {
    id: 3,
    title: "Maya Garden Magnesia",
    builder: "Maya Garden Group",
    location: "Zirakpur, Chandigarh",
    config: "Commercial Space",
    size: "390 - 3425 SQ. FT.",
    price: "₹ 25.93 L - 2.67 Cr",
    img: "trendingp-image2.png",
    rera: true,
    newLaunch: true,
  },
  {
    id: 4,
    title: "Birla Ojasvi",
    builder: "Birla Estates",
    location: "RR Nagar, Bangalore",
    config: "2, 3 BHK + Row House",
    size: "929 - 3535 SQ. FT.",
    price: "₹ 1.42 Cr - 5.65 Cr",
    img: "trendingp-image3.png",
    rera: true,
    newLaunch: true,
  },
];

export default function TrendingProjects() {
  return (
    <Box sx={{ width: "100%", mt: 5 }}>
      
      {/* Heading */}
      <Box textAlign="center" mb={4} sx={{ mt: 12 }}>
        <Typography variant="h3" fontWeight={700}>
          Trending Projects
        </Typography>
        <Typography mt={1} color="gray">
          The Noteworthy Real Estate in India
        </Typography>
      </Box>

      {/* RESPONSIVE FLEX LAYOUT */}
      <Box
        sx={{
          display: "flex",
          flexWrap: { xs: "wrap", sm: "wrap", lg: "nowrap" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 3,
          width: "100%",
          alignItems: "stretch",
          justifyContent: { xs: "center", sm: "flex-start" },
          p: 2,
          mt: 5,
        }}
      >
        {/* LEFT CARD */}
        <Card
          sx={{
            width: { xs: "100%", sm: "280px" },
            height: 390,
            borderRadius: 3,
            padding: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid  #c9c7c7",
            bgcolor: "#f6f6f6",
          }}
        >
          <CorporateFareIcon sx={{ fontSize: 40, color: "#d81b60" }} />

          <Typography fontSize={20} fontWeight={700} mt={2}>
            Best Sellers in India
          </Typography>

          <Typography mt={1.5} color="gray" fontSize={14}>
            The latest residential offerings from the best builders in India,
            handpicked by our team of experts just for you and backed by our
            widely acclaimed transaction and financial services.
          </Typography>

          <Button
            variant="contained"
            sx={{
              mt: 3,
              background: "#d81b60",
              textTransform: "none",
              borderRadius: 20,
            }}
          >
            View All
          </Button>
        </Card>

        {/* RIGHT SIDE CARDS */}
        {projects.map((p) => (
          <Card
            key={p.id}
            sx={{
              flex: 1,
              borderRadius: 3,
              position: "relative",
              display: "flex",
              flexDirection: "column",
              border: "1px solid  #c9c7c7",
              height: 390,
              width: { xs: "100%", sm: "300px", lg: "400px" },
            }}
          >
            {p.newLaunch && (
              <Chip
                label="New Launch"
                sx={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  bgcolor: "#ff1744",
                  color: "#fff",
                }}
              />
            )}

            <IconButton
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                color: "white",
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>

            <CardMedia
              component="img"
              height="160"
              image={p.img}
              sx={{ borderRadius: "12px 12px 0 0" }}
            />

            <CardContent sx={{ p: 2, pb: 0 }}>
              <Typography fontWeight={700} fontSize={15}>
                {p.title}
              </Typography>

              <Typography fontSize={13} color="gray">
                By {p.builder}
              </Typography>

              <Typography fontSize={13}>{p.location}</Typography>

              <Typography fontSize={13}>
                {p.config} • {p.size}
              </Typography>

              {p.rera && (
                <Chip
                  label="RERA"
                  size="small"
                  icon={<CheckCircleIcon sx={{ fontSize: 15 }} />}
                  sx={{
                    bgcolor: "#e8f5e9",
                    color: "#2e7d32",
                    fontWeight: 600,
                    mt: 1,
                  }}
                />
              )}

              <Typography fontWeight={700} fontSize={16} mt={1} mb={0}>
                {p.price}
              </Typography>
            </CardContent>

            <Box sx={{ p: 2, pt: 1 }}>
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  borderRadius: "50px",
                  textTransform: "none",
                  color: "#d81b60",
                  borderColor: "#d81b60",
                  fontSize: "16px",
                  height: "40px",
                  width: 140,
                  mt: 0,
                  pt: 0,
                  pb: 0,
                  lineHeight: 1,
                  ":hover": {
                    color: "white",
                    bgcolor: "#d81b60",
                  },
                }}
              >
                Contact
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
