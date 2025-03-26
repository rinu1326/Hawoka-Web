import React, { useEffect, useState } from 'react';

const Text = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getFontSize = (baseSize) => {
    if (windowWidth <= 480) {
      return `${baseSize * 0.5}rem`; // Mobile
    } else if (windowWidth <= 768) {
      return `${baseSize * 0.65}rem`; // Tablet
    } else if (windowWidth <= 1024) {
      return `${baseSize * 0.8}rem`; // Small desktop
    } else {
      return `${baseSize}rem`; // Large desktop
    }
  };

  const styles = {
    container: {
      backgroundColor: '#000',
      color: '#fff',
      padding: windowWidth <= 768 ? '5% 5%' : '5% 8%',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      overflow: 'hidden',
    },
    title: {
      fontSize: getFontSize(4.5),
      fontWeight: 500,
      lineHeight: 1.1,
      marginBottom: windowWidth <= 768 ? '1.5rem' : '2rem',
      maxWidth: windowWidth <= 768 ? '100%' : '90%',
    },
    tagline: {
      fontSize: getFontSize(3.5),
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: '0.5rem',
    },
    subheading: {
      fontSize: getFontSize(3.5),
      fontWeight: 500,
      lineHeight: 1.2,
      marginBottom: windowWidth <= 768 ? '2rem' : '3rem',
    },
    description: {
      fontSize: getFontSize(1.15),
      lineHeight: 1.5,
      maxWidth: windowWidth <= 768 ? '100%' : '800px',
    },
    strong: {
      fontWeight: 600,
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Graphic Design Company in {windowWidth <= 480 ? '' : <br />} Dubai – Services
      </h1>
      <h2 style={styles.tagline}>We don't stop at "pretty"</h2>
      <h3 style={styles.subheading}>This is how we make it matter</h3>
      
      <div style={styles.description}>
        <strong style={styles.strong}>A brand needs to capture wonder and improve daily life.</strong> We develop the complete 
        anatomy of a brand—purpose, positioning and personality—with the goal to instill 
        a sense of wonder and generate value.
      </div>
    </div>
  );
};

export default Text;