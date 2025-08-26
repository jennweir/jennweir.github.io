import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Bars from './DropDownMenu';

function DropDown() {
  const styles={
    menu: {
      display: 'flex', 
      justifyContent: 'Center',
      alignItems: 'Center',
      marginRight: '6.5rem',
      position: 'absolute',
    },
    item: {
      alignItems: 'Center',
      margin: '4%',
    },
    button: {
      border: 'none',
      background: 'rgb(233, 246, 230)',
    }


  }
    return (
      <Dropdown>
        <Dropdown.Toggle style={styles.button}>
          <Bars />
        </Dropdown.Toggle>
  
        <Dropdown.Menu style={styles.menu}>
          <Dropdown.Item href="/#/" style={styles.item}>Home</Dropdown.Item>
          <Dropdown.Item href="/#/about/" style={styles.item}>About</Dropdown.Item>
          <Dropdown.Item href="/#/projects/" style={styles.item}>Projects</Dropdown.Item>
          <Dropdown.Item href="/#/blog/" style={styles.item}>Blog</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  
  export default DropDown;