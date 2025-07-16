import { Box, Typography, TextField, Button, Container } from "@mui/material";
import { Grid } from "@mui/material";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [emailErrorText, setEmailErrorText] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
    if (e.target.name === "email") setEmailErrorText("");
  };

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const newErrors = {
      name: !name,
      email: !email || !validateEmail(email),
      message: !message,
    };

    setErrors(newErrors);

    if (newErrors.email && email) {
      setEmailErrorText("Invalid email format");
    }

    const hasErrors = Object.values(newErrors).some(Boolean);
    if (!hasErrors) {
      console.log("Submitted Data:", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        minHeight: "100vh",
        backgroundColor: "#fff",
        py: { xs: 8, md: 12 },
      }}
    >
      <Container
        maxWidth="sm"
        data-aos="fade-up"
        style={{
          maxWidth: "800px",
        }}
      >
        <Typography variant="h3" textAlign="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={4}
          color="text.secondary"
        >
          Feel free to reach out by filling the form below.
        </Typography>
        <form onSubmit={handleSubmit} style={{ maxWidth: "800px" }}>
          <Box
            display="flex"
            flexDirection="column"
            gap={3}
            alignItems="center"
          >
            {/* Row 1: Name and Email side by side */}
            <Box
              display="flex"
              gap={3}
              width="100%"
              flexDirection={{ xs: "column", md: "row" }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name ? "Name is required" : ""}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={
                  errors.email ? emailErrorText || "Email is required" : ""
                }
              />
            </Box>

            {/* Row 2: Message full width */}
            <TextField
              fullWidth
              multiline
              minRows={4}
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              helperText={errors.message ? "Message is required" : ""}
            />

            {/* Row 3: Centered Submit Button */}
            <Box textAlign="center">
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{
                  borderRadius: "30px",
                  px: 5,
                  py: 1.5,
                  textTransform: "uppercase",
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
