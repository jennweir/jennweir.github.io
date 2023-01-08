import React from 'react';
import GoToTop from '../components/GoToTop';
import hardest2Wk from './media/hardest2Weeks.png';
import binary from './media/difficultBinary.png';
import noRush from './media/noRush.png';
import march from './media/march.png';
import community from './media/community.png';
  
const Blog = () => {
  const styles={
    blogImage: {
      width: '80%', 
      borderRadius: '8px', 
      margin: '4%',
    }
  };
  return (
    <div style={{ justifyContent: 'Center', alignItems: 'Center', margin: '3%' }} className="font-link">
      <div>
        <h1>Blog Posts</h1>
      </div>
      <div>
        <p style={{ fontSize: '20px', fontWeight: '600', marginTop: '5px', padding: '2px' }}>
        I am a member of Girls in Electrical Engineering and Computer Science (GEECS) at U of M. 
        Within this organization, I have been on the Internal Relations Committee for 3 semesters 
        and have written numerous blog posts with a target audience of women in tech. 
        Read each one by clicking the images below!</p>
      </div>
      <a href="https://www.geecsumich.com/blog/post-weekend-of-dec-3rd">
        <img src={hardest2Wk} alt="hardest 2 weeks blog post" style={styles.blogImage}></img>
      </a>
      <a href="https://www.geecsumich.com/blog/navigating-a-difficult-binary-not-1s-and-0s">
        <img src={binary} alt="navigating a difficult binary blog post" style={styles.blogImage}></img>
      </a>
      <a href="https://www.geecsumich.com/blog/no-need-to-rush-or-win-the-race">
        <img src={noRush} alt="no rush blog post" style={styles.blogImage}></img>
      </a>
      <a href="https://www.geecsumich.com/blog/march-13th-2020">
        <img src={march} alt="covid blog post" style={styles.blogImage}></img>
      </a>
      <a href="https://www.geecsumich.com/blog/community-within-geecs">
        <img src={community} alt="finding community blog post" style={styles.blogImage}></img>
      </a>
      <div style={{ marginBottom: '5%' }}></div>
      <GoToTop />
    </div>
    



  );
};
  
export default Blog;