import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", py: 3, bgcolor: "#f5f5f5", mt: 5 }}>
      <Typography variant="body2">© {new Date().getFullYear()} Shubham Vitore. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
