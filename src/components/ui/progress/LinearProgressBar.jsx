import React from "react";
import { LinearProgress, linearProgressClasses, styled } from "@mui/material";

// Styled progress bar
const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...(theme.palette.mode === "dark" && {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
    ...(theme.palette.mode === "dark" && {
      backgroundColor: "#308fe8",
    }),
  },
}));

// Reusable component
const BorderLinearProgress = ({ value }) => {
  return <StyledLinearProgress variant="determinate" value={value} />;
};

export default BorderLinearProgress;
