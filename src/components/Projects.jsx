import React from "react";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";

const projects = [
  { title: "Portfolio Website", desc: "Personal portfolio built with React & MUI" },
  { title: "E-Commerce App", desc: "Full stack app with Spring Boot & React" },
  { title: "Chat App", desc: "Real-time messaging app using WebSocket" },
];

function Projects() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Projects</Typography>
      <Grid container spacing={3}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">{project.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Projects;
