import React from 'react';
import '../App.css';
import GoToTop from '../components/GoToTop';
import mainPhoto from './media/mainPhoto.png';
import archRock from './media/archRockUP.png';
import sequoiaHike from './media/sequoiaHike.png';
import switzerFalls from './media/switzerFallsHike.png';
import westCoast from './media/westCoastDrive.png';
import campus from './media/fallCampus.png';
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
      margin: '5px',
      color: 'rgb(4, 116, 56)',
    },
    greenLinks: {
      margin: '10px',
    },
    subheading: {
      color: 'rgb(4, 116, 56)', 
      marginBottom: '0.5%', 
      padding: '2px',
    },
    subText: {
      fontSize: '23px', 
      fontWeight: '600', 
      marginTop: '0.5%', 
      padding: '2px',
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
      borderRadius: '30px', 
      marginBottom: '20px',
    },
    imageBottom: {
      width: '100%', 
      borderRadius: '30px', 
      marginTop: '20px',
    },
    mobile: {
      
    }
  
  
  
  
  };
  return (
    <div style={{ justifyContent: 'Center', margin: '1%' }}>
      <div style={{ display: 'flex' }} className="mobile">
        <div style={{ flex: '50%', marginTop: '5%' }} className='font-link'>
          <h1>Hi, my name is</h1>
          <p style={{ fontSize: '60px', fontWeight: '700', margin: '20px' }}>Jennifer Weir</p>
          <h1 style={styles.greenFont}>I'm a Computer</h1>
          <h1 style={styles.greenFont}>Science student</h1>
          <div style={{ marginTop: '2%' }}>
            <a href="#background" style={styles.greenLinks}>Quick Background</a>
            <a href="#more" style={styles.greenLinks}>More Info</a>
            <a href="#facts" style={styles.greenLinks}>Fun Facts</a>
          </div>

          <div style={{ display: 'flex', alignItems: 'Center' }}>
            <div style={{ margin: '10px' }}>
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
        <div style={{ flex: '50%', margin: '20px', display: 'flex', justifyContent: 'Center', 
        alignItems: 'Center' }}> 
          <img src={mainPhoto} alt="Jennifer" style={{ width: '65%', borderRadius: '30px' }}/>
        </div>
      </div>

      <div style={styles.greenBox}>
        <img src={arrow} alt="down arrow" style={{ width: '3%', marginTop: '5%' }}></img>
      </div>

      <div id="background"></div>
      <div style={{ marginTop: '5%' }}>
        <div style={{ display: 'flex', justifyContent: 'Center', marginLeft: '30px' }} 
        className='font-link mobile'>
          <div style={{ flex: '50%', textAlign: 'left', fontSize: '50px', fontWeight: '700' }}>
            <p style={{ marginBottom: '10px' }}>A Quick</p>
            <p style={{ marginTop: '10px' }}>Background</p>
          </div>
          
          <div style={{ flex: '50%', margin: '20px'}}>
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '10px' }}>
              <h1 style={styles.subheading}>I'm based in</h1>
              <p style={styles.subText}>ANN ARBOR, MI</p>
              </div>
            </div> 
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '10px'}}>
              <h1 style={styles.subheading}>I'm a 3rd year student (graduating April 2024) at</h1>
              <p style={styles.subText}>THE UNIVERSITY OF MICHIGAN</p>
              </div>
            </div> 
            <div style={styles.whiteBox} className='font-link'>
              <div style={{ marginLeft: '10px' }}>
              <h1 style={styles.subheading}>Last summer I interned at Northrop Grumman as a</h1>
              <p style={styles.subText}>SYSTEMS TEST ENGINEER</p>
              </div>
            </div> 
          </div>
        </div>
      </div>

      <div id="more"></div>
      <div style={{ fontSize: '20px', fontWeight: '600', marginTop: '10.5%', margin: '5%', 
      alignItems: 'Left' }} className="font-link">
        <p>I'm an undergraduate student studying Computer Science with a 
          minor in Complex Systems at the University of Michigan Ann Arbor (graduating April 2024). 
          Last summer I interned at Northrop Grumman as a Systems Test Engineer and worked as a NASA
          contractor at the Armstrong Flight Research Center. I'm a passionate student with an 
          intrinsic desire to learn more about new scientific breakthroughs and current events in 
          tech. I love learning new things and I'm always open to working on interesting projects 
          with new people! 
        </p>
        <p>🔭 I’m currently working as a developer lead on a mobile application with 
          <a href="https://github.com/void-tech-um"> Void Tech</a>.
          As a student org, we work on applications that help Michigan students to improve and address 
          problems within the student community on campus. 
        </p>
        <p>🌱 I’m currently learning about blockchain technology and decentralized applications. 
          I'm also reading about assembly language programming for 
          <a href="https://github.com/pkivolowitz/asm_book?utm_source"> Linux machines </a> and for
          <a href="https://github.com/below/HelloSilicon?utm_source"> Apple Silicon</a>.
        </p>
        <p>💬 Ask me about daily current events. I read the <a href="https://wsj.com"> Wall Street Journal </a>
          and <a href="https://tldr.tech/"> TLDR </a> newsletter daily and enjoy discussing what's 
          happening in the world. Reach out! I'd love to meet you!
        </p>
      </div>
      

      <div id="pictures"></div>
      <div style={{ marginTop: '10%', marginBottom: '5%' }}>
          <div style={{ display: 'flex', justifyContent: 'Center', margin: '20px' }} className='font-link'>
            <div style={{ flex: '30%' }}>
              <img src={archRock} alt="Arch-shaped rock in the landscape" style={styles.imageTop}/>
              <img src={switzerFalls} alt="Jennifer on the side of a mountain" style={styles.imageBottom}/>
            </div>
            <div style={{ flex: '70%' }}>
              <div style= {{ display: 'flex' }}> 
                <div style={{ flex: '40%'}}>
                  <img src={campus} alt="Campus in the fall" style={{ width: '74%', borderRadius: '30px' }}/>
                </div>
                <div style={{ flex: '30%' }}>
                  <img src={sequoiaHike} alt="Jennifer on a hike" style={styles.imageTop}/>
                  <img src={westCoast} alt="West Coast road" style={styles.imageBottom}/>
                </div>
              </div>
              <p style={{ fontSize: '25px', fontWeight: '600', marginTop: '5%' }}>
                I love taking photos! Here are some pictures of places I've been! </p>
            </div>
          </div>
        </div>
      
      
      <div id="facts"></div>
      <div style={{ marginTop: '10%', display: 'flex', justifyContent: 'Center', marginLeft: '30px' }} 
      className='font-link mobile'>
        <div style={{ flex: '50%', textAlign: 'left', fontSize: '50px', fontWeight: '700' }}>
          <p style={{ marginBottom: '10px' }}>Three Fun</p>
          <p style={{ marginTop: '10px' }}>Facts</p>
        </div>

        <div style={{ flex: '50%', margin: '20px' }}>
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '10px' }}>
            <h1 style={styles.subheading}>I love snorkeling</h1>
            <p style={styles.subText}>I've gone snorkeling in the Atlantic 
            and Pacific Oceans and I hope to receive my scuba diving certification one day!</p>
            </div>
          </div> 
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '10px'}}>
            <h1 style={styles.subheading}>I play the flute</h1>
            <p style={styles.subText}>I love classical music and I was 
            involved with band and orchestra all throughout highschool.</p>
            </div>
          </div> 
          <div style={styles.whiteBox} className='font-link'>
            <div style={{ marginLeft: '10px' }}>
            <h1 style={styles.subheading}>I'm NASA solder certified</h1>
            <p style={styles.subText}>During my summer 2022 internship I
            took a soldered electrical assemblies class and became solder certified 
            by Jet Propulsion Laboratory.</p>
            </div>
          </div> 
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'Center' }}>
        <div style={{  }}>
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