import React from "react";
import NavBox from "../components/Navbar.jsx";
import Profile from "../components/Homepage/Profile.jsx";
import { Typography, Button, Divider, Box, Hidden } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/system";

const Homepage = () => {
  const navigate = useNavigate();
  const profile = [
    {
      name: "Varissara Wongprasit",
      github: "https://github.com/varissara-wo",
      linkedin: "https://www.linkedin.com/in/varissara-wongprasit-108945230/",
      img: "images/phone.svg",
    },
    {
      name: "Apiwat Singharach",
      github: "https://github.com/Hohokz",
      linkedin: "https://www.linkedin.com/in/apiwat-singharach/",
      img: "images/Apiwat_Avatar.png",
    },
    {
      name: "Cholanuch Kasemtanakitti",
      github: "https://github.com/cholanuchkorn123",
      linkedin:
        "https://www.linkedin.com/in/cholanuch-kasemtanakitti-8b3202244/",
      img: "images/korn-avatar.png",
    },
    {
      name: "Thanakorn Boonlar",
      github: "https://github.com/thanakornboonlar",
      linkedin: "https://www.linkedin.com/in/bestball/",
      img: "images/ball-avatar.png",
    },
    {
      name: "Nattakit Rattanakeha",
      github: "https://github.com/MilesNR",
      linkedin: "https://www.linkedin.com/in/nattakit-rattanakeha-746b39248/",
      img: "images/smile-avatar.png",
    },
  ];
  return (
    <>
      <Box id="Nav-bar">
        <NavBox />
      </Box>

      <Box width="100vw" id="Content-container">
        {/* --------------------------------------- Create account Section --------------------------------------- */}
        <Stack
          id="Create-account-section"
          fullWidth
          height="auto"
          marginTop={{ xs: 12, sm: 15 }}
        >
          <Stack
            id="Title-content"
            direction={"column"}
            justifyContent="center"
            alignItems={"center"}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              justifyContent="center"
              alignItems={"center"}
              // marginTop={{ xs: 0, sm: 0 }}
            >
              <Hidden smDown>
                <Typography variant="h2" component="h1" color="warning">
                  The
                </Typography>
                <Typography variant="h2" component="h1" color="warning">
                  place
                </Typography>
                <Typography variant="h2" component="h1" color="warning">
                  where
                </Typography>
              </Hidden>
            </Stack>

            <Stack
              direction={{
                xs: "column",
                sm: "row", //600px
                // md: "row", //900px
                // lg: "column", // 1200px
                // xl: "row", //1535px
              }}
              spacing={{ xs: 1, sm: 4 }}
              justifyContent="center"
              alignItems={"center"}
            >
              <Typography variant="h2" component="h1" color="warning">
                you get
              </Typography>

              <Typography variant="h2" component="span" color="primary">
                that
              </Typography>

              <Typography variant="h2" component="span" color="warning">
                job
              </Typography>
            </Stack>

            <Typography
              variant="h5"
              component="p"
              width={{ xs: 350, sm: 600 }}
              textAlign="center"
              marginTop={4}
            >
              With our Machine Learning algorithm you will get that job in no
              time. We promise you! Just give us the money and we will take care
              of it.
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "32px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                fontFamily="button"
                onClick={() => navigate("/register")}
                sx={{
                  display: "flex",
                  color: "#FFF",
                  borderColor: "primary",
                  width: "264px",
                  height: "56px",
                  margin: "10px",
                  borderRadius: "16px",
                }}
              >
                create an account now
              </Button>
            </Box>

            <Stack width={"auto"}>
              <img src="images/Peoplegroup.svg" alt="woman" width={"auto"} />
            </Stack>
          </Stack>
        </Stack>
        {/* ----------------------------------------- Article Section ----------------------------------------- */}
        <Hidden mdDown>
          <Stack id="Article-section" direction={"row"}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                width: "55%",
                backgroundColor: "error.main",
                padding: "64px 120px",
              }}
            >
              <Typography
                variant="h3"
                component="p"
                color="primary.contrastText"
                sx={{
                  marginBottom: "24px",
                }}
              >
                Find your next job
              </Typography>
              <Typography
                variant="findYouJob"
                component="p"
                color="primary.contrastText"
                sx={{
                  marginBottom: "40px",
                  width: "80%",
                  fontSize: "24px",
                }}
              >
                Our Machine learning algorithm is so good that it’s even illegal
                in some countries. Join us to use our barelly legal algorithm
                that is actually a group of interns that work on our basement.
              </Typography>
              <Typography
                variant="findYouJob"
                component="p"
                color="primary.contrastText"
                sx={{
                  width: "80%",
                  fontSize: "24px",
                }}
              >
                We have a job for you, no matter your background or previous
                experience. Is sending random memes through chat your only
                skill? That’s ok, we got you, our Rock Star Meme Curator role is
                here for you.
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "35%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="images/loupe.svg" alt="loupe" />
            </Box>
          </Stack>
        </Hidden>
        {/* ----------------------------------------- Footer Section ----------------------------------------- */}
        <Stack
          id="Footer-section"
          backgroundColor="#E5E5E5"
          fullWidth
          direction={"column"}
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Typography
            variant="h2"
            component="h1"
            color="primary"
            marginTop={4}
            fontSize={{ xs: 32, sm: 48 }}
          >
            Meet the team
          </Typography>
          <Stack
            backgroundColor="#E5E5E5"
            direction={{ xs: "column", sm: "row", md: "row" }}
            justifyContent="center"
            alignItems="center"
            flexWrap={"wrap"}
            spacing={4}
          >
            {/* Picture your team */}
            {profile.map((profile) => {
              return (
                <Profile
                  name={profile.name}
                  github={profile.github}
                  linkedin={profile.linkedin}
                  img={profile.img}
                />
              );
            })}
          </Stack>
          <Stack width={"80%"}>
            <Divider
              sx={{
                display: "flex",
                width: "100%",
                borderColor: "#BF5F82",
              }}
            />
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems={"center"}
              spacing={4}
              textAlign={"center"}
            >
              <Typography
                variant="underLine"
                component="span"
                color="warning"
                textAlign={"center"}
              >
                © 202X - Get That Job
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="underLine"
                  component="span"
                  color="warning"
                  sx={{
                    display: "flex",
                    marginBottom: "5px",
                  }}
                  textAlign={"center"}
                >
                  Source Code
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingButton: "10px",
                  }}
                >
                  <Box>
                    <Typography
                      variant="underLine"
                      component="span"
                      color="warning"
                      textAlign={"center"}
                      sx={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                    >
                      REST API with Node and Express
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", width: "200px" }}>
                    <img src="images/React.svg" alt="react icon" />
                    <Typography
                      variant="underLine"
                      component="span"
                      color="warning"
                      sx={{
                        paddingLeft: "5px",
                        paddingRight: "5px",
                      }}
                      textAlign={"center"}
                    >
                      React Responsive SPA
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="underLine"
                  component="span"
                  color="warning"
                >
                  Codeable - Cohort X Final Project
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};
export default Homepage;
