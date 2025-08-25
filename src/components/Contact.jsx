import React from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";

function Contact() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>Contact Me</Typography>
      <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 500 }}>
        <TextField label="Name" fullWidth required />
        <TextField label="Email" fullWidth required />
        <TextField label="Message" fullWidth multiline rows={4} required />
        <Button variant="contained" color="primary">Send Message</Button>
      </Box>
    </Container>
  );
}

export default Contact;
