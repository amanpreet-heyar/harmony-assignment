import { Box, Typography, Avatar, Grid, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 12 },
      }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left - Avatar */}
        <Grid item xs={12} md={5} sx={{ textAlign: 'center' }}>
          <Avatar
            alt="Developer"
            src="https://i.pravatar.cc/300"
            sx={{
              width: 380,
              height: 380,
              margin: '0 auto',
              border: '8px solid white',
              boxShadow: '0px 4px 30px rgba(0,0,0,0.2)',
            }}
          />
          <Typography
            variant="subtitle1"
            mt={2}
            color="text.secondary"
            sx={{ fontWeight: 500 }}
          >
            XYZ · Frontend Developer
          </Typography>
        </Grid>

        {/* Right - Text & Button */}
        <Grid item xs={12} md={7}>
          <Typography variant="h1" component="h1" gutterBottom style={{letterSpacing:"20px", fontWeight:700}}>
            Hello
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 500, letterSpacing:"10px", mb: 4 }}>
            A Bit About Me
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 500, fontSize:"16px", color:"gray" }}>
           Hi! I'm a dedicated frontend developer who loves crafting interactive and responsive web experiences. I specialize in building modern UIs with React and TypeScript, and I care deeply about performance, accessibility, and great design.</Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ borderRadius: '50px', textTransform: 'none', px: 4 }}
            onClick={() => {
              const section = document.getElementById('contact');
              section?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contact Here
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
