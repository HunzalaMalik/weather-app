import React from "react"
import LinearProgress from "@mui/material/LinearProgress"
import { Box, CircularProgress } from "@mui/material"

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CircularProgress color="inherit" />
    </Box>
  )
}

export default Loader
