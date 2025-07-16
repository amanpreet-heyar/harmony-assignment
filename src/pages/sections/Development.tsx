import { Box, Typography, Paper, Chip } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import StorageIcon from '@mui/icons-material/Storage';
import LanIcon from '@mui/icons-material/Lan';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const technologies = [
  {
    name: 'React.js',
    icon: <WebAssetIcon />,
    color: 'primary',
    description: 'A JavaScript library for building fast and interactive user interfaces.',
    animation: 'zoom-in',
  },
  {
    name: 'TypeScript',
    icon: <CodeIcon />,
    color: 'secondary',
    description: 'A strongly typed programming language that builds on JavaScript.',
    animation: 'zoom-in',
  },
  {
    name: 'Material UI',
    icon: <WebAssetIcon />,
    color: 'info',
    description: 'A popular React UI framework with prebuilt components and themes.',
    animation: 'zoom-in',
  },
  {
    name: 'Node.js',
    icon: <StorageIcon />,
    color: 'success',
    description: 'JavaScript runtime built on Chrome’s V8 engine for server-side development.',
    animation: 'zoom-in',
  },
  {
    name: 'Express.js',
    icon: <IntegrationInstructionsIcon />,
    color: 'warning',
    description: 'Minimal and flexible Node.js web application framework.',
    animation: 'zoom-in',
  },
  {
    name: 'MongoDB',
    icon: <StorageIcon />,
    color: 'default',
    description: 'A NoSQL database used for scalable and flexible data storage.',
    animation: 'zoom-in',
  },
  {
    name: 'Socket.IO',
    icon: <LanIcon />,
    color: 'error',
    description: 'Library for real-time WebSocket communication in web apps.',
    animation: 'zoom-in',
  },
];

const Development = () => {
  return (
    <Box
      id="development"
      sx={{
        minHeight: '100vh',
        px: { xs: 3, md: 10 },
        py: { xs: 8, md: 12 },
        backgroundColor: '#f0f0f0',
      }}
    >
      <Typography variant="h3" textAlign="center" gutterBottom>
        Technologies I Use
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          mt: 4,
        }}
      >
        {technologies.map((tech, index) => (
          <Box
            key={index}
            data-aos={tech.animation}
            sx={{
              flex: '1 1 280px',
              maxWidth: 360,
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: 3,
                borderRadius: 3,
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                },
              }}
            >
              <Chip
                label={tech.name}
                icon={tech.icon}
                color={tech.color as any}
                sx={{
                  fontSize: '1rem',
                  mb: 2,
                  borderRadius: '20px',
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {tech.description}
              </Typography>
            </Paper>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Development;
