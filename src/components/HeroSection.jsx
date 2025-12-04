import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Grid,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import Typewriter from "typewriter-effect";
import TrendingProjects from "./TrendingProjects";
import CuratedCollections from "./CuratedCollections";

const HeroSection = () => {
  const [propertyType, setPropertyType] = React.useState("residential");

  return (
    <Box>
      <Box
        sx={{
          height: { xs: "90vh", sm: "85vh", md: "85vh" },
          backgroundImage: "url('/hero-img.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
          position: "relative",
        }}
      >
        {/* HEADING */}
        <Typography
          variant="h3"
          fontWeight={400}
          color="#fff"
          sx={{
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            whiteSpace: { xs: "normal", md: "nowrap" },
            fontSize: { xs: "22px", sm: "28px", md: "36px" },
            px: 1,
          }}
        >
          Discover Properties in{" "}
          <span
            style={{
              display: "inline-block",
              minWidth: "200px",
              fontWeight: 700,
            }}
          >
            <Typewriter
              options={{
                strings: ["India", "Top State", "Top City", "Popular Localities"],
                autoStart: true,
                loop: true,
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </span>
        </Typography>

        {/* SUB HEADING */}
        <Typography
          variant="h6"
          color="#fff"
          sx={{
            mb: 4,
            mt: 1,
            textShadow: "0 2px 6px rgba(0,0,0,0.4)",
            fontSize: { xs: "14px", md: "18px" },
          }}
        >
          We help you find your new home
        </Typography>

        {/* SEARCH BOX */}
        <Box
          sx={{
            mt: 2,
            width: "100%",
            maxWidth: "900px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            gap: 2,
            px: { xs: 1, sm: 0 },
          }}
        >
          {/* INPUT BOX */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              background: "#fff",
              p: { xs: "6px", sm: "10px" },
              borderRadius: "10px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
              height: { xs: "48px", sm: "54px", md: "60px" },
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              placeholder="Search by City, Location, Project, Developer"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                sx: {
                  px: 2,
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            />
          </Box>

          {/* SEARCH BUTTON */}
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            sx={{
              width: { xs: "100%", sm: "auto" },
              background: "#f5007b",
              px: { xs: 4, sm: 5 },
              height: { xs: "48px", sm: "54px", md: "60px" },
              borderRadius: "10px",
              textTransform: "none",
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": { background: "#d4006e" },
              boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
            }}
          >
            Search
          </Button>
        </Box>

        {/* TOGGLE BUTTONS */}
        <ToggleButtonGroup
          exclusive
          value={propertyType}
          onChange={(e, val) => val && setPropertyType(val)}
          sx={{
            mt: 3,
            background: "rgba(255,255,255,0.25)",
            backdropFilter: "blur(6px)",
            borderRadius: "30px",
            p: 0.5,
            width: { xs: "90%", sm: "auto" },
          }}
        >
          <ToggleButton
            value="residential"
            sx={{
              color: "#000",
              background:
                propertyType === "residential" ? "#fff" : "transparent",
              borderRadius: "30px !important",
              px: { xs: 2, sm: 4 },
              fontWeight: 600,
              width: { xs: "50%", sm: "auto" },
            }}
          >
            Residential
          </ToggleButton>

          <ToggleButton
            value="commercial"
            sx={{
              color: "#000",
              background:
                propertyType === "commercial" ? "#fff" : "transparent",
              borderRadius: "30px !important",
              px: { xs: 2, sm: 4 },
              fontWeight: 600,
              width: { xs: "50%", sm: "auto" },
            }}
          >
            Commercial
          </ToggleButton>
        </ToggleButtonGroup>

        {/* STATS ROW */}
        <Grid
          container
          spacing={4}
          sx={{
            mt: 8,
            width: { xs: "100%", md: "75%" },
            color: "#fff",
            textAlign: "center",
            mx: "auto",
            justifyContent: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="h4" fontWeight={700}>
              40+
            </Typography>
            <Typography variant="body1" letterSpacing={1.5}>
              CITIES IN INDIA
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4" fontWeight={700}>
              5892
            </Typography>
            <Typography variant="body1" letterSpacing={1.5}>
              PROJECTS
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4" fontWeight={700}>
              680
            </Typography>
            <Typography variant="body1" letterSpacing={1.5}>
              DEVELOPERS
            </Typography>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h4" fontWeight={700}>
              70,751
            </Typography>
            <Typography variant="body1" letterSpacing={1.5}>
              CUSTOMERS
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="h4" fontWeight={700}>
              ₹ 46000+ Cr
            </Typography>
            <Typography variant="body1" letterSpacing={1.5}>
              WORTH PROPERTY SOLD
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <TrendingProjects/>
      <CuratedCollections/>

    </Box>
  );
};

export default HeroSection;
