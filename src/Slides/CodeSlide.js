import React from 'react';
import Highlight from 'react-highlight.js';
import 'highlight.js/styles/monokai.css'; // Import a theme of your choice

const CodeSlide = ({ language, codeString }) => {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#282c34', borderRadius: '8px', color: '#fff' }}>
      <h3 style={{ textAlign: 'center', color: '#61dafb' }}>Code Example</h3>
      <Highlight language={language}>
        {codeString}
      </Highlight>
    </div>
  );
};

export default CodeSlide;
