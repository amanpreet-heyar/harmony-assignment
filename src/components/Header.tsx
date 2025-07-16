import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  ListItemButton, 
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const sections = ['about', 'services', 'blog', 'development', 'contact'];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => handleScroll('about')}>
            DevPortfolio
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 250 }}>
                  {sections.map((section) => (
                    <ListItemButton
                      key={section}
                      onClick={() => handleScroll(section)}
                    >
                      <ListItemText primary={section.toUpperCase()} />
                    </ListItemButton>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {sections.map((section) => (
                <Typography
                  key={section}
                  onClick={() => handleScroll(section)}
                  sx={{ cursor: 'pointer', '&:hover': { color: '#ddd' } }}
                >
                  {section.toUpperCase()}
                </Typography>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
