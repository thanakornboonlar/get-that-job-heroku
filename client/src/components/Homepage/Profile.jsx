import React from "react";
import { Typography, Link, Box, Stack } from "@mui/material";

const Profile = (props) => {
  const { name, github, linkedin, img } = props;
  return (
    <>
      <Stack direction={"column"} justifyContent="center" alignItems={"center"}>
        <Box>
          <img src={img} alt={name} />
        </Box>
        <Typography
          marginTop="16px"
          variant="meetTeam"
          color="#000"
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18px",
            gap: "53px",
          }}
        >
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Link href={github}>
              <img src="images/github.svg" alt="github icon" />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Link href={linkedin}>
              <img src="images/linkedin.svg" alt="linkedin icon" />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
