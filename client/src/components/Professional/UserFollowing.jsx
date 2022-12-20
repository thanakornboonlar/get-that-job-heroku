import React, { useEffect, useState } from "react";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";
import usePosts from "../../hooks/usePost";
import FollowJobWrapper from "./FollowJobWrapper";
import { useAuth } from "../../contexts/authentication.jsx";
import JobWrapper from "./JobWrapper";

const UserFollowing = () => {
  const { isLoading, getFollow, follow, followJob, followJobApplication } =
    usePosts();
  const { state, getUserData, isUserLoading } = useAuth();
  const [isFollow, setIsFollow] = useState(true);

  const handlerFollow = (jobId) => {
    followJobApplication(jobId, state.user["id"]);
    setIsFollow(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getUserData();
      const userId = state.user.id;
      getFollow(userId);
    }, 800);
    return () => clearTimeout(timer);
  }, [isLoading, isUserLoading, isFollow]);

  return (
    <Box
      sx={{
        backgroundColor: "#F5F5F6",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
        minWidth: "100vh",
        marginLeft: "240px",
        paddingBottom: "50px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          marginLeft: "100px",
          marginTop: "30px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ marginTop: "24px", marginBottom: "16px", fontWeight: "400" }}
        >
          Following
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: "20px" }}>
          You are following {follow.length} jobs
        </Typography>
        {isLoading === true && (
          <Stack
            width="90%"
            height="60vh"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress disableShrink />
          </Stack>
        )}

        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          {isLoading === false &&
            follow.map((item, index) => {
              return (
                <JobWrapper
                  key={index}
                  img={item.logo_url}
                  category={item.name}
                  type={item.type}
                  name={item.company_name}
                  minSalary={item.min_salary}
                  maxSalary={item.max_salary}
                  jobTitle={item.job_title}
                  jobId={item.job_id}
                  isFollow={true}
                  handlerFollow={handlerFollow}
                />
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default UserFollowing;
