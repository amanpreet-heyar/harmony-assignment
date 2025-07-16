import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import StorageIcon from '@mui/icons-material/Storage';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const services = [
  {
    title: 'Web Development',
    icon: <CodeIcon />,
    description: 'Building responsive and scalable web applications using React, TypeScript, and Node.js.',
    bg: 'linear-gradient(135deg, #667eea, #764ba2)',
    animation: 'fade-up',
  },
  {
    title: 'UI/UX Design',
    icon: <BrushIcon />,
    description: 'Designing beautiful and user-friendly interfaces with Figma and Material UI.',
    bg: 'linear-gradient(135deg, #ff6a00, #ee0979)',
    animation: 'flip-left',
  },
  {
    title: 'Backend Services',
    icon: <StorageIcon />,
    description: 'Creating secure and performant APIs with Express.js and MongoDB.',
    bg: 'linear-gradient(135deg, #00c9ff, #92fe9d)',
    animation: 'zoom-in',
  },
  {
    title: 'Mobile-First Design',
    icon: <PhoneIphoneIcon />,
    description: 'Crafting mobile-first layouts for optimal performance across all devices.',
    bg: 'linear-gradient(135deg, #f7971e, #ffd200)',
    animation: 'fade-up-right',
  },
];

const Services = () => {
  return (
    <Box
      id="services"
      sx={{
        minHeight: '100vh',
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h3" gutterBottom textAlign="center">
        Our Services
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          mt: 4,
        }}
      >
        {services.map((service, index) => (
          <Box
            key={index}
            data-aos={service.animation}
            sx={{
              flex: '1 1 280px',
              maxWidth: 340,
            }}
          >
            <Card
              sx={{
                height: '100%',
                background: service.bg,
                color: 'white',
                borderRadius: 4,
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: '0 12px 25px rgba(0,0,0,0.3)',
                },
              }}
              elevation={6}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    width: 60,
                    height: 60,
                    margin: '0 auto',
                    mb: 2,
                  }}
                >
                  {service.icon}
                </Avatar>
                <Typography variant="h5" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Services;
