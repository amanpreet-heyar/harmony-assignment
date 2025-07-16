import MainLayout from './layout/MainLayout';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  AOS.init();
  return <MainLayout />;
};

export default App;
