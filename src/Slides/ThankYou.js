import React from 'react';

const ThankYou = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Thank You!</h1>
        <p style={styles.message}>
          We really appreciate your effort and time. Have a wonderful day ahead!
        </p>
        <div style={styles.emoji}>😊</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #FFDDC1, #FFB6B9)',
  },
  card: {
    background: '#fff',
    borderRadius: '15px',
    padding: '2rem 3rem',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#FF6F61',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.25rem',
    color: '#555',
    marginBottom: '2rem',
  },
  emoji: {
    fontSize: '3rem',
  },
};

export default ThankYou;
