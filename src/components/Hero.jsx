import React, { Component } from "react";
import { Container, Typography, Button, Box } from "@mui/material";

class Hero extends Component {
  render() {
    return (
      <Container sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h3" gutterBottom>
          Hi, I’m Shubham Vitore 👋
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Java Full Stack Developer | React | Spring Boot | AWS
        </Typography>
        <Box mt={3}>
          <Button variant="contained" color="primary" href="/projects">
            View My Work
          </Button>
        </Box>
      </Container>
    );
  }
}

export default Hero;
