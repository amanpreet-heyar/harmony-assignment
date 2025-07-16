import { Box, Typography, Avatar, Button } from '@mui/material';

const About = () => {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 6,
        backgroundColor: '#f0f0f0',
        px: { xs: 4, md: 10 },
        py: { xs: 6, md: 12 },
      }}
    >
      {/* Left - Avatar Section */}
      <Box
        sx={{
          textAlign: 'center',
          flex: 1,
        }}
      >
        <Avatar
          alt="Developer"
          src="https://i.pravatar.cc/300"
          sx={{
            width: 300,
            height: 300,
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
      </Box>

      {/* Right - Text Section */}
      <Box
        sx={{
          flex: 1,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{ letterSpacing: '20px', fontWeight: 700 }}
        >
          Hello
        </Typography>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontWeight: 500, letterSpacing: '10px', mb: 4 }}
        >
          A Bit About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: 500, fontSize: '16px', color: 'gray', mx: { xs: 'auto', md: 0 } }}
        >
          Hi! I'm a dedicated frontend developer who loves crafting
          interactive and responsive web experiences. I specialize in
          building modern UIs with React and TypeScript, and I care deeply
          about performance, accessibility, and great design.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            borderRadius: '50px',
            textTransform: 'none',
            px: 4,
          }}
          onClick={() => {
            const section = document.getElementById('contact');
            section?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Contact Here
        </Button>
      </Box>
    </Box>
  );
};

export default About;
