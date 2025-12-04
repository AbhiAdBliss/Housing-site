import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  IconButton,
} from "@mui/material";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LanguageIcon from "@mui/icons-material/Language";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ExploreIcon from "@mui/icons-material/Explore";
import GavelIcon from "@mui/icons-material/Gavel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Curated Collections Data
const collections = [
  { title: "New Projects", image: "/curatedCollection-img.png" },
  { title: "Ready to Move", image: "/curatedCollection-img1.png" },
  { title: "Luxury", image: "/curatedCollection-img2.png" },
  { title: "Budget Friendly", image: "/curatedCollection-img3.png" },
  { title: "Condominiums", image: "/curatedCollection-img4.png" },
  { title: "Builder Floors", image: "/curatedCollection-img5.png" },
  { title: "For Bachelors", image: "/curatedCollection-img6.png" },
  { title: "Row Houses", image: "/curatedCollection-img7.png" },
];

// Featured Cities Data
const cities = [
  { id: 1, name: "Gurgaon", img: "featured-cities-img1.png", count: "627 Options" },
  { id: 2, name: "Bangalore", img: "featured-cities-img2.png", count: "1195 Options" },
  { id: 3, name: "Pune", img: "featured-cities-img3.png", count: "1568 Options" },
  { id: 4, name: "Noida", img: "featured-cities-img4.png", count: "478 Options" },
  { id: 5, name: "Kolkata", img: "featured-cities-img5.png", count: "890 Options" },
  { id: 6, name: "Lucknow", img: "featured-cities-img6.png", count: "1340 Options" },
  { id: 7, name: "Mumbai", img: "featured-cities-img7.png", count: "760 Options" },
];

const footerLinks = [
  {
    title: "Property in Top Country",
    items: [
      "Property in India",
      "Residential Property in India",
      "Commercial Property in India",
    ],
  },
  {
    title: "Property in Top State",
    items: [
      "Property in Haryana",
      "Property in Maharashtra",
      "Property in Uttar Pradesh",
      "Property in Tamil Nadu",
      "Property in West Bengal",
    ],
  },
  {
    title: "Property in Top City",
    items: [
      "Property in Gurgaon",
      "Property in Pune",
      "Property in Noida",
      "Property in Chennai",
      "Property in Bangalore",
    ],
  },
  {
    title: "Property in Popular Localities",
    items: [
      "Property in NH 8 Gurgaon",
      "Property in Hinjewadi Pune",
      "Property in NH24 Ghaziabad",
      "Property in Porur Chennai",
      "Property in North Bangalore",
    ],
  },
  {
    title: "Popular Developer",
    items: ["Property of Godrej", "ATS Group", "Lodha", "Mahagun", "Gulshan Homz"],
  },
];

const reraData = [
  { title: "Uttar Pradesh RERA", code: "UPRERAAGT10868" },
  { title: "Maharashtra RERA", code: "A51900000246" },
  { title: "Goa RERA", code: "AGGO07180190" },
];

const services = [
  {
    title: "Real Estate Consulting",
    desc:
      "Those days are now passé when purchasing a home used to be a very arduous task and buyers had to run from pillar to post to g...",
    icon: <HandshakeIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
  {
    title: "Home Loan Consultation",
    desc:
      "Attractive home loans have made purchasing property very convenient as buyers do not have to pay everything upfront. Our expe...",
    icon: <HomeWorkIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
  {
    title: "NRI Services",
    desc:
      "Investment inflows from the Indian diaspora have been rising at astounding rates. However, the ascent has slowed down as many...",
    icon: <LanguageIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
  {
    title: "After sales assistance",
    desc:
      "Our services do not stop once the deal is closed. We are committed to assisting our customers in every possible way. We have ...",
    icon: <HeadsetMicIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
  {
    title: "Vastu Consultation",
    desc:
      "Vaastu is a subtle way of bringing in harmony and channelizing energy in and around the home. We provide Vaastu consulting to...",
    icon: <ExploreIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
  {
    title: "Legal Consultation",
    desc:
      "360 Realtors are not limited to supporting purchase/selling transactions in the real-estate domain. We walk with our clients ...",
    icon: <GavelIcon sx={{ fontSize: 70, color: "#e10098" }} />,
  },
];

const CuratedCollections = () => {
  const [page, setPage] = React.useState(0);
  const itemsPerPage = 4;

  const paginatedCities = cities.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const nextPage = () => {
    if ((page + 1) * itemsPerPage < cities.length) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <Box>

      {/* Curated Collections */}
      <Box sx={{ py: 8, px: { xs: 2, md: 6 }, background: "#f5f5f5", mt: 10 }}>
        <Typography textAlign="center" fontSize={{ xs: 24, md: 32 }} fontWeight={700} mb={1}>
          Curated Collections
        </Typography>
        <Typography textAlign="center" fontSize={{ xs: 14, md: 18 }} color="gray" mb={5}>
          Explore prime properties based on your recommendation
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {collections.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.title} display="flex" justifyContent="center">
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  height: { xs: 200, md: 220 },
                  width: { xs: "100%", sm: "90%", md: 320 },
                  position: "relative",
                  cursor: "pointer",
                  transition: "0.3s",
                  "&:hover .simpleBorder": {
                    borderColor: "#fff",
                    padding: "8px 22px",
                    opacity: 1,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{ height: "100%", width: "100%", objectFit: "cover" }}
                />

                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.45)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="simpleBorder"
                    fontSize={{ xs: 18, md: 22 }}
                    fontWeight={700}
                    color="#fff"
                    textAlign="center"
                    sx={{
                      border: "2px solid transparent",
                      borderRadius: "6px",
                      padding: "6px 18px",
                      opacity: 0.9,
                      transition: "all 0.35s ease",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Featured Cities */}
  {/* Featured Cities Section */}
<Box sx={{ width: "100%", py: 5, px: { xs: 2, md: 4 }, mt: 5 }}>

  <Box textAlign="center" mb={4}>
    <Typography variant="h5" fontSize={{ xs: 22, md: 28 }} fontWeight={700}>
      Featured Cities
    </Typography>
    <Typography mt={1} color="gray" fontSize={{ xs: 14, md: 16 }}>
      Find your home in the city of your choice
    </Typography>
  </Box>

  {/* SLIDER WRAPPER (ARROWS ALIGNED CENTER) */}
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      mt: 6,
    }}
  >
    {/* LEFT ARROW */}
    {page > 0 && (
      <IconButton
        onClick={prevPage}
        sx={{
          position: "absolute",
          left: { xs: 0, sm: 20, md: 40 },
          zIndex: 10,
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "#f1f1f1" },
        }}
      >
        <ArrowForwardIosIcon sx={{ transform: "rotate(180deg)" }} />
      </IconButton>
    )}

    {/* CITY CARDS CENTERED */}
    <Box
      sx={{
        display: "flex",
        gap: 3,
        flexWrap: { xs: "wrap", md: "nowrap" },
        justifyContent: "center",
        maxWidth: "95%",
      }}
    >
      {paginatedCities.map((city) => (
        <Card
          key={city.id}
          sx={{
            width: { xs: "100%", sm: "45%", md: 330 },
            height: 260,
            borderRadius: 4,
            overflow: "hidden",
            position: "relative",
            border: "1px solid #e0e0e0",
            boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
            cursor: "pointer",
            "&:hover img": { transform: "scale(1.1)" },
          }}
        >
          <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
            <CardMedia
              component="img"
              image={city.img}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "0.4s ease",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "rgba(0,0,0,0.35)",
              }}
            >
              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {city.name}
              </Typography>
            </Box>
          </Box>

          <CardContent sx={{ textAlign: "center", py: 2 }}>
            <Typography fontSize={16} color="#d81b60" fontWeight={600}>
              {city.count}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>

    {/* RIGHT ARROW */}
    {(page + 1) * itemsPerPage < cities.length && (
      <IconButton
        onClick={nextPage}
        sx={{
          position: "absolute",
          right: { xs: 0, sm: 20, md: 40 },
          zIndex: 10,
          backgroundColor: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          "&:hover": { backgroundColor: "#f1f1f1" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    )}
  </Box>
</Box>


      {/* Why Buy With Us */}
      <Box sx={{ py: 10, background: "#f5f5f7", px: { xs: 2, md: 6 }, mt: 6 }}>
        <Typography textAlign="center" fontSize={{ xs: 26, md: 32 }} fontWeight={700} mb={1}>
          Why buy with us ?
        </Typography>

        <Typography textAlign="center" fontSize={{ xs: 14, md: 18 }} color="gray" mb={6}>
          Aspects that make 360 Realtors India’s leading Real Estate Advisory
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {services.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} display="flex" justifyContent="center">
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 430,
                  p: 4,
                  borderRadius: 3,
                  boxShadow: "0px 3px 15px rgba(0,0,0,0.08)",
                  textAlign: "center",
                  background: "#fff",
                  cursor: "pointer",
                  "&:hover .zoomIcon": { transform: "scale(1.2)" },
                }}
              >
                <Box
                  className="zoomIcon"
                  mb={2}
                  sx={{
                    display: "inline-flex",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {item.icon}
                </Box>

                <Typography fontSize={20} fontWeight={700} mb={1.5}>
                  {item.title}
                </Typography>

                <Typography color="gray" fontSize={15} lineHeight={1.6}>
                  {item.desc}
                  <span style={{ color: "#d81b60", cursor: "pointer" }}> Read More</span>
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Footer */}
     <Box
  sx={{
    background: "#241424",
    color: "#fff",
    py: 10,
    px: { xs: 3, md: 10 },
  }}
>
  {/* TOP FOOTER LINKS */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(5,1fr)",
      },
      gap: { xs: 4, sm: 5, md: 6 },
      mb: 8,
    }}
  >
    {footerLinks.map((col) => (
      <Box key={col.title} sx={{ textAlign: { xs: "center", md: "left" } }}>
        <Typography
          fontSize={18}
          fontWeight={700}
          mb={2}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {col.title}
        </Typography>

        {col.items.map((item) => (
          <Typography
            key={item}
            fontSize={16}
            sx={{
              mb: 1,
              opacity: 0.85,
              cursor: "pointer",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {item}
          </Typography>
        ))}
      </Box>
    ))}
  </Box>

  {/* DIVIDER */}
  <Box
    sx={{
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      mb: 6,
      width: "100%",
    }}
  />

  {/* RERA SECTION */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(4,1fr)",
      },
      textAlign: { xs: "center", md: "center" },
      rowGap: { xs: 5, sm: 4 },
      columnGap: 4,
      px: { xs: 1, sm: 2 },
    }}
  >
    {reraData.map((rera) => (
      <Box key={rera.title}>
        <Typography fontSize={22} fontWeight={700}>
          {rera.title}
        </Typography>
        <Typography mt={1} opacity={0.9} fontSize={16}>
          {rera.code}
        </Typography>
      </Box>
    ))}

    <Box>
      <Typography fontSize={22} fontWeight={700}>
        Haryana RERA
      </Typography>
      <Typography mt={1} opacity={0.9} fontSize={16}>
        HRERA(REG.) 59 OF 2017
      </Typography>
    </Box>
  </Box>
</Box>


    </Box>
  );
};

export default CuratedCollections;
