import React from "react";
import { Container, Typography, Chip, Stack } from "@mui/material";

const skills = ["Java", "Spring Boot", "ReactJS", "Microservices", "AWS", "Docker", "Kubernetes"];

function Skills() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Skills</Typography>
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {skills.map((skill, index) => (
          <Chip key={index} label={skill} color="primary" />
        ))}
      </Stack>
    </Container>
  );
}

export default Skills;
