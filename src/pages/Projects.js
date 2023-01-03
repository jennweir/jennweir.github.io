import React from 'react';
import GoToTop from '../components/GoToTop';
import voidLogo from '../pages/media/void-logo-main.png';
  
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
          <p style={styles.subheading}>Developer Lead</p>
          <p style={styles.subheading}>September 2022 - Present</p>
          <p style={styles.text}>Currently developing a mobile application to serve as a platform 
          for University of Michigan students to buy and sell items.</p>
          <p style={styles.text}>Void Tech is a student-led organization at U of M that builds tools
          for Michigan students. "By Michigan students, for Michigan students."
          This team consists of a small group of student developers and 
          designers who pitched ideas at the beginning of the year and are currently developing 
          the chosen applications.</p>
        </div>
        <div style={{ flex: '50%', margin: '1%', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={voidLogo} alt="Jennifer" style={{ width: '60%', borderRadius: '6%' }}/>
        </div>
      </div>

      <p style={styles.heading}>More coming soon!</p>
      <GoToTop />
    </div>
  );
};
  
export default Projects;