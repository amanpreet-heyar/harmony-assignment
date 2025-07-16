import { Container } from '@mui/material';
import About from './sections/About';
import Services from './sections/Services';
import Blog from './sections/Blog';
import Development from './sections/Development';
import Contact from './sections/Contact';


const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <About />
      <Services />
      <Blog />
      <Development />
      <Contact />
    </Container>
  );
};

export default Home;
