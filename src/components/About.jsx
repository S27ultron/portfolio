import React from "react";
import { Container, Typography } from "@mui/material";

function About() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="body1">
        I am a passionate Java Full Stack Developer with 4+ years of experience 
        in building scalable applications using Java, Spring Boot, React, 
        Microservices, and Cloud technologies.
      </Typography>
    </Container>
  );
}

export default About;
