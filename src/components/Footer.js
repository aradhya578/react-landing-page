import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2025 Aradhya's Project. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: '0px',
    padding: '5px',
    backgroundColor: 'rgb(185, 130, 219) ',
    textAlign: 'center',
    margin: 0,
  }
};

export default Footer;