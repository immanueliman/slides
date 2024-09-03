import React, { useRef } from 'react';
import './App.css';

import Presentation from './Slides/Presentation';


function App() {
  // Always call useRef, but handle conditional usage in your logic
  const myRef = useRef(null);

  // Example of using the ref conditionally based on isBrowser
  if (typeof window !== "undefined") {
    console.log(myRef);
  }

  return (
    <div className="App">
      {/* <OpeningSlide /> */}
      <Presentation/>

    </div>
  );
}

export default App;
