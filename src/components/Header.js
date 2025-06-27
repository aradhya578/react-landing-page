import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>Welcome to My Landing Page</h1>
      <p>Discover new, unique and powerful features below.</p>
    </header>
  );
};

const styles = {
  header: {
    padding: '10px',
    backgroundColor: ' rgb(185, 130, 219)',//rgba(191, 95, 230, 0.3)
    color: 'black',
    textAlign: 'center',
  }
};

export default Header;