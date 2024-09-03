import React, { useState } from 'react';
import './Presentation.css';
import ImageComponent from './ImageComponent';
import WelcomeImage from '../assets/welcome.jpg';  // Import the image
import ChartComponent from './ChartComponent';
import CodeSlide from './CodeSlide';
import PythonCompiler from './PythonCompiler';
import ThankYou from './ThankYou';


const codeExample = `
def hello_world():
    print("Hello, world!")

if __name__ == "__main__":
    hello_world()

`;

const slidesData = [
  { id: 1, content: <ImageComponent src={WelcomeImage}  isThumbnail={false} /> },
  { id: 2, content: <ChartComponent /> },  // Add the ChartComponent
//   { id: 3, content: <div style={{ color: 'red', fontSize: '22px' }}>This is a simple text slide</div> },
  { id: 5, content: <CodeSlide language="python" codeString={codeExample} /> }, // Use the CodeSlide component
  { id: 6, content: <PythonCompiler /> },  
  { id: 7, content: <ThankYou /> },  // Use the ThankYou component

  // Add more slides as needed
];

function Presentation() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <div className="presentation-container" style={themeStyles.presentationContainer}>
      <header className="header" style={themeStyles.header}>
        <div style={themeStyles.logoContainer}>
          <img src="/path-to-your-logo.png" alt="Demo Logo" style={themeStyles.logo} />
        </div>
        <h1 style={themeStyles.headerText}>My Enhanced Presentation</h1>
        <button onClick={toggleTheme} style={themeStyles.toggleButton}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <div className="main-content" style={themeStyles.mainContent}>
        <aside className="slides-list" style={themeStyles.slidesList}>
          {slidesData.map((slide, index) => (
            <div
              key={slide.id}
              className={`slide-thumbnail ${index === currentSlide ? 'active' : ''}`}
              style={{
                ...themeStyles.slideThumbnail,
                ...(index === currentSlide ? themeStyles.activeSlideThumbnail : {}),
              }}
              onClick={() => setCurrentSlide(index)}
            >
              {React.cloneElement(slide.content, { isThumbnail: true })}
            </div>
          ))}
        </aside>

        <section className="slide-viewer" style={themeStyles.slideViewer}>
          <div className="slide-content" style={themeStyles.slideContent}>
            <div style={themeStyles.watermark}>Synbrains</div>
            {slidesData[currentSlide].content}
          </div>
        </section>
      </div>

      <footer className="footer" style={themeStyles.footer}>
        <button
          onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
          style={themeStyles.button}
        >
          Previous
        </button>
        <div style={themeStyles.footerInfo}>
          <p>© 2024 Demo Company. All rights reserved.</p>
          <p>Contact: demo@example.com</p>
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slidesData.length - 1))}
          style={themeStyles.button}
        >
          Next
        </button>
      </footer>
    </div>
  );
}

const commonStyles = {
  presentationContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  header: {
    padding: '0.5rem',
    textAlign: 'center',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    marginLeft: '1rem',
  },
  logo: {
    height: '40px',
  },
  headerText: {
    margin: 0,
    fontSize: '1.5rem',
  },
  toggleButton: {
    padding: '0.5rem 1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '1rem',
  },
  mainContent: {
    display: 'flex',
    flex: 1,
    overflow: 'hidden',
  },
  slidesList: {
    width: '20%',
    padding: '1rem',
    overflowY: 'auto',
  },
  slideThumbnail: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    height: '80px',
    overflow: 'hidden',
  },
  slideViewer: {
    flex: 1,
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slideContent: {
    width: '100%',
    height: '100%',
    borderRadius: '12px',
    padding: '1rem',
    boxSizing: 'border-box',
    overflow: 'auto',
    position: 'relative',
  },
  watermark: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    opacity: 0.1,
    fontSize: '2rem',
    pointerEvents: 'none',
  },
  footer: {
    padding: '0.5rem',
    textAlign: 'center',
    borderTop: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerInfo: {
    textAlign: 'center',
    fontSize: '0.8rem',
    color: '#888',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 1rem',
  },
};

const lightStyles = {
  ...commonStyles,
  presentationContainer: {
    ...commonStyles.presentationContainer,
    backgroundColor: '#f0f0f0',
  },
  header: {
    ...commonStyles.header,
    backgroundColor: '#6200ea',
    color: '#fff',
  },
  toggleButton: {
    ...commonStyles.toggleButton,
    backgroundColor: '#ffffff',
    color: '#6200ea',
  },
  slidesList: {
    ...commonStyles.slidesList,
    backgroundColor: '#fafafa',
    borderRight: '1px solid #ccc',
  },
  slideThumbnail: {
    ...commonStyles.slideThumbnail,
    backgroundColor: '#fff',
    border: '1px solid #ddd',
  },
  activeSlideThumbnail: {
    borderColor: '#6200ea',
    backgroundColor: '#e0e0e0',
  },
  slideViewer: {
    ...commonStyles.slideViewer,
    backgroundColor: '#fff',
  },
  slideContent: {
    ...commonStyles.slideContent,
    border: '1px solid #ccc',
  },
  footer: {
    ...commonStyles.footer,
    backgroundColor: '#6200ea',
    color: '#fff',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#ffffff',
    color: '#6200ea',
  },
};

const darkStyles = {
  ...commonStyles,
  presentationContainer: {
    ...commonStyles.presentationContainer,
    backgroundColor: '#121212',
  },
  header: {
    ...commonStyles.header,
    backgroundColor: '#333',
    color: '#fff',
  },
  toggleButton: {
    ...commonStyles.toggleButton,
    backgroundColor: '#333',
    color: '#ffffff',
  },
  slidesList: {
    ...commonStyles.slidesList,
    backgroundColor: '#1e1e1e',
    borderRight: '1px solid #444',
  },
  slideThumbnail: {
    ...commonStyles.slideThumbnail,
    backgroundColor: '#333',
    border: '1px solid #444',
  },
  activeSlideThumbnail: {
    borderColor: '#bb86fc',
    backgroundColor: '#444',
  },
  slideViewer: {
    ...commonStyles.slideViewer,
    backgroundColor: '#222',
  },
  slideContent: {
    ...commonStyles.slideContent,
    border: '1px solid #444',
  },
  footer: {
    ...commonStyles.footer,
    backgroundColor: '#333',
    color: '#fff',
  },
  button: {
    ...commonStyles.button,
    backgroundColor: '#444',
    color: '#bb86fc',
  },
};

export default Presentation;