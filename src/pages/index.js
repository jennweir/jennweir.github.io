import React from 'react';
import GoToTop from '../components/GoToTop';
  
const Home = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'Center', alignItems: 'Center' }} className="font-link">
      <h1>Home Page</h1>

      <GoToTop />
    </div>
  );
};
  
export default Home;