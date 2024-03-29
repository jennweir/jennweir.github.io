import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../App.css';
import GoToTop from '../components/GoToTop';
import mainPhoto from './media/mainPhoto.png';
import arrow from './media/arrowIcon.png';
import email from './media/emailIcon.png';
import linkedin from './media/linkedinIcon.png';
import github from './media/githubIcon.png';
import resume from './media/resumeIcon.png';
import resumepdf from './media/Resume - Jennifer Weir.pdf';
  
const About = () => {
   const styles = {
    greenFont: {
      textDecoration: 'none',
      margin: '1%',
      color: 'rgb(4, 116, 56)',
    },
    greenLinks: {
      margin: '2%',
    },
    subheading: {
      color: 'rgb(4, 116, 56)', 
      marginBottom: '0.5%', 
      padding: '0.5%',
    },
    subText: {
      fontSize: '23px', 
      fontWeight: '600', 
      marginTop: '0.5%', 
      padding: '1%',
    },
    whiteBox: {
      alignItems: 'Center', 
      background: '#FFFFFF', 
      textAlign: 'Left', 
      borderRadius: '20px',
      padding: '1%',
      margin: '20px',
    },
    imageTop: {
      width: '100%', 
      borderRadius: '6%', 
      marginBottom: '4%',
    },
    imageBottom: {
      width: '100%', 
      borderRadius: '6%', 
      marginTop: '4%',
    },
  
  };
  return (
    <div style={{ justifyContent: 'Center', margin: '1%' }}>
      <div style={{ display: 'flex' }} className="mobile">
        <div style={{ flex: '50%', marginTop: '4%' }} className='font-link'>
          <h1>Hi, my name is</h1>
          <p style={{ fontSize: '50px', fontWeight: '700', margin: '4%' }}>Jennifer Weir</p>
          <h1 style={styles.greenFont}>I'm a Computer</h1>
          <h1 style={styles.greenFont}>Science student</h1>
          <div style={{ marginTop: '2%' }}>
            <Link to="/about#background" style={styles.greenLinks}>Quick Background</Link>
            <Link to="/about#more" style={styles.greenLinks}>More Info</Link>
            <Link to="/about#facts" style={styles.greenLinks}>Fun Facts</Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'Center' }}>
            <div style={{ margin: '2%' }}>
                <a href="mailto: jennweir@umich.edu">
                  <img src={email} alt="email" style={{ width: '12%', margin: '2%' }}></img>
                </a>
                <a href="https://www.linkedin.com/in/jennifer-weir">
                  <img src={linkedin} alt="linkedin" style={{ width: '12%', margin: '2%' }}></img>
                </a>
                <a href="https://github.com/jennweir">
                  <img src={github} alt="github" style={{ width: '12%', margin: '2%' }}></img>
                </a>
                <a href={resumepdf} target="_blank" rel="noreferrer">
                  <img src={resume} alt="resume" style={{ width: '12%', margin: '2%' }}></img>
                </a>
            </div>
          </div>

        </div>
        <div style={{ flex: '50%', margin: '4%', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={mainPhoto} alt="Jennifer" style={{ width: '60%', borderRadius: '6%' }}/>
        </div>
      </div>

      <div style={styles.greenBox}>
        <img src={arrow} alt="down arrow" style={{ width: '3%', marginTop: '5%' }}></img>
      </div>

      <div id="background"></div>
      <div style={{ marginTop: '5%' }}>
        <div style={{ display: 'flex', justifyContent: 'Center', marginLeft: '6%' }} 
        className='font-link mobile'>
          <div style={{ flex: '50%', textAlign: 'left', fontSize: '50px', fontWeight: '700' }}>
            <p style={{ marginBottom: '2%' }}>A Quick</p>
            <p style={{ marginTop: '2%' }}>Background</p>
          </div>
          
          <div style={{ flex: '50%', margin: '4%'}}>
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '2%' }}>
              <h1 style={styles.subheading}>I'm based in</h1>
              <p style={styles.subText}>ANN ARBOR, MI</p>
              </div>
            </div> 
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '2%'}}>
              <h1 style={styles.subheading}>I'm a 4th year student (graduating May 2024) at</h1>
              <p style={styles.subText}>THE UNIVERSITY OF MICHIGAN</p>
              </div>
            </div> 
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '2%' }}>
              <h1 style={styles.subheading}>Last summer I worked at Ford Motor Company as a</h1>
              <p style={styles.subText}>SOFTWARE ENGINEER INTERN</p>
              </div>
            </div> 
            <div id="more"></div>
          </div>
        </div>
      </div>

      <div style={{ fontSize: '20px', fontWeight: '600', marginTop: '10%', margin: '5%', 
        alignItems: 'Left'
      }} className="font-link">
        <p className="mobile-spacing">I'm an undergraduate student studying Computer Science with a 
          minor in Complex Systems at the University of Michigan Ann Arbor (graduating May 2024). 〽️ Go Blue! 
          I have interned with Ford Motor Company 🚙 as a Software Engineer Intern (Summer 2023) 
          and at Northrop Grumman as a Systems Test Engineer where I worked as a NASA contractor at 
          the Armstrong Flight Research Center 🚀 (Summer 2022). I'm a passionate student 
          📚 with an intrinsic desire to learn more about new scientific breakthroughs and 
          current events in 💻 tech. I love learning new things and I'm always open to working 
          on interesting projects with new people! 
        </p>
        <p>🔭 I’m currently working as VP of Development with 
          <a href="https://voidtechmichigan.org/"> Void Tech</a>.
          As a student org, we work on applications that help Michigan students to 
          improve and address problems within the student community on campus. 
        </p>
        <p>In my free time I enjoy running 🏃, biking 🚴‍♀️, hot yoga 🧘‍♀️, playing the flute 🎵, and watching Michigan football 🏈.</p>
        <p>💬 Ask me about daily current events. I read the <a href="https://wsj.com"> Wall Street Journal </a>
          and <a href="https://tldr.tech/"> TLDR </a> newsletter daily and enjoy discussing what's 
          happening in the world. Reach out! I'd love to meet you!
        </p>
      </div>  
      
      <div id="facts"></div>
      <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'Center', marginLeft: '6%' }} 
      className='font-link mobile'>
        <div style={{ flex: '50%', textAlign: 'left', fontSize: '50px', fontWeight: '700' }}>
          <p style={{ marginBottom: '2%' }}>Three Fun</p>
          <p style={{ marginTop: '2%' }}>Facts</p>
        </div>

        <div style={{ flex: '50%', margin: '4%' }}>
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '2%' }}>
            <h1 style={styles.subheading}>I love snorkeling</h1>
            <p style={styles.subText}>I've gone snorkeling in the Atlantic 
            and Pacific Oceans and I hope to receive my scuba diving certification one day!</p>
            </div>
          </div> 
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '2%'}}>
            <h1 style={styles.subheading}>I play the flute</h1>
            <p style={styles.subText}>I love classical music and I was 
            involved with band and orchestra all throughout highschool.</p>
            </div>
          </div> 
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '2%' }}>
            <h1 style={styles.subheading}>I'm NASA solder certified</h1>
            <p style={styles.subText}>During my summer 2022 internship I
            took a soldered electrical assemblies class and became solder certified 
            by NASA Jet Propulsion Laboratory.</p>
            </div>
          </div> 
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'Center' }}>
        <div style={{ justifyContent: 'Center' }}
        className='mobile-disappear'>
            <a href="mailto: jennweir@umich.edu">
              <img src={email} alt="email" style={{ width: '5%', margin: '2%' }}></img>
            </a>
            <a href="https://www.linkedin.com/in/jennifer-weir">
              <img src={linkedin} alt="linkedin" style={{ width: '5%', margin: '2%' }}></img>
            </a>
            <a href="https://github.com/jennweir">
              <img src={github} alt="github" style={{ width: '5%', margin: '2%' }}></img>
            </a>
            <a href={resumepdf} target="_blank" rel="noreferrer">
              <img src={resume} alt="resume" style={{ width: '5%', margin: '2%' }}></img>
            </a>
        </div>
      </div>
      <GoToTop />
    </div>
  );
};

export default About;