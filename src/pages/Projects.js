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
    projectItem: {
      display: 'flex',
      justifyContent: 'Center',
      marginTop: '2%',
      marginBottom: '2%',
    },
    link: {
      textDecoration: 'none',
      color: 'rgb(4, 116, 56)',
      margin: 'none',
      fontWeight: '600',
    },
  };
  return (
    <div style={{  justifyContent: 'Center', margin: '5%' }} className='font-link'>
      <h1>Projects</h1>

      <div style={styles.projectItem} className="mobile">
        <div style={{ flex: '60%', marginTop: '2%' }} className='font-link'>
          <p style={styles.heading}> Haberman Fabrics</p>
          <p style={styles.subheading}>Freelance Website Work</p>
          <p style={styles.subheading}>May 2023 - Present</p>
          <p style={styles.text}></p>
          <p style={styles.text}>Haberman Fabrics is an independent, family owned and operated Fabric
            store in Southeast, MI. I replaced Haberman Fabrics' previous Wix
            website with a custom-built solution that I started from scratch. This solution is written using Python Flask for server-side
            rendering, HTML/CSS for the frontend along with React.js entry points, a PostgreSQL relational database, and AWS for hosting.
            The basic version of this project is currently in production and can be accessed here: 
            <a href="https://habermanfabrics.com" style={styles.link}> Haberman Fabrics Website</a>
            . Many additional features, including an online store for shopping and ecommerce, are in development and ready to be demonstrated.
          </p>
        </div>
        <div style={{ flex: '40%', margin: '1%', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={habfabLogo} alt="Jennifer" style={{ width: '60%', borderRadius: '6%' }}/>
        </div>
      </div>

      <div style={styles.projectItem} className="mobile">
        <div style={{ flex: '60%', marginTop: '2%' }} className='font-link'>
          <p style={styles.heading}> Void Tech</p>
          <p style={styles.subheading}>VP of Development</p>
          <p style={styles.subheading}>September 2022 - Present</p>
          <p style={styles.text}>Void Tech is a student-led organization at U of M that builds tools
            for Michigan students. "By Michigan students, for Michigan students." We are currently
            working on identifying our projects for this year.</p>
        </div>
        <div style={{ flex: '40%', margin: '1%', display: 'flex', justifyContent: 'Center', 
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