import React from 'react';
import GoToTop from '../components/GoToTop';
import voidLogo from '../pages/media/void-logo-main.png';
import habfabLogo from '../pages/media/habfab-logo.png';
  
const Projects = () => {
  const styles = {
    heading: {
      fontSize: '23px', 
      fontWeight: '600', 
      marginTop: '5px',
    },
    subheading: {
      fontSize: '20px', 
      fontWeight: '600', 
      margin: '0',
      textAlign: 'left',
    },
    text: {
      fontSize: '20px', 
      fontWeight: '400', 
      margin: '5px',
      textAlign: 'left',
    },

  }
  return (
    <div style={{  justifyContent: 'Center', margin: '3%' }} className='font-link'>
      <h1>Projects</h1>

      <div style={{ display: 'flex', justifyContent: 'Center' }} className="mobile">
        <div style={{ flex: '50%', marginTop: '2%' }} className='font-link'>
          <p style={styles.heading}> Void Tech</p>
          <p style={styles.subheading}>VP of Development</p>
          <p style={styles.subheading}>September 2022 - Present</p>
          <p style={styles.text}>Void Tech is a student-led organization at U of M that builds tools
            for Michigan students. "By Michigan students, for Michigan students." We are currently
            working on identifying our projects for this year.</p>
        </div>
        <div style={{ flex: '50%', margin: '1%', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={voidLogo} alt="Jennifer" style={{ width: '40%', borderRadius: '6%' }}/>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'Center' }} className="mobile">
        <div style={{ flex: '50%', marginTop: '2%' }} className='font-link'>
          <p style={styles.heading}> Haberman Fabrics</p>
          <p style={styles.subheading}>Freelance Website Work</p>
          <p style={styles.subheading}>May 2023 - August 2023</p>
          <p style={styles.text}>Haberman Fabrics is an independent, family owned and operated Fabric
            store in Southeast, MI.</p>
          <p style={styles.text}>Currently in development and website will be linked here once in production.</p>
        </div>
        <div style={{ flex: '50%', margin: '1%', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={habfabLogo} alt="Jennifer" style={{ width: '40%', borderRadius: '6%' }}/>
        </div>
      </div>

      <p style={styles.heading}>More coming soon!</p>
      <GoToTop />
    </div>
  );
};
  
export default Projects;