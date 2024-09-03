import React, { useState, useEffect } from 'react';

const PythonCompiler = () => {
  const [code, setCode] = useState('print("Hello, World!")');
  const [output, setOutput] = useState('');
  const [pyodide, setPyodide] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        setLoading(true);
        const pyodideInstance = await window.loadPyodide();
        setPyodide(pyodideInstance);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load Pyodide:", error);
        setOutput("Error: Failed to load Python environment.");
        setLoading(false);
      }
    };
    loadPyodide();
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput('Python environment is not loaded yet.');
      return;
    }

    try {
      setOutput('');
      // Redirect Python's print output to a JavaScript function
      pyodide.globals.set("output", (text) => {
        setOutput(prevOutput => prevOutput + text + "\n");
      });

      const codeWithOutput = `
import sys
sys.stdout.write = output
${code}
`;
      await pyodide.runPythonAsync(codeWithOutput);

    } catch (error) {
      setOutput(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#282c34', borderRadius: '8px', color: '#fff' }}>
      <h3 style={{ textAlign: 'center', color: '#61dafb' }}>Python Code Compiler (Powered by Pyodide)</h3>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        style={{
          width: '100%',
          height: '150px',
          borderRadius: '5px',
          padding: '10px',
          fontSize: '16px',
          fontFamily: 'monospace',
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
          border: 'none',
          outline: 'none',
          resize: 'none',
        }}
      />
      <button
        onClick={runCode}
        disabled={loading}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: loading ? '#a9a9a9' : '#61dafb',
          color: loading ? '#666666' : '#282c34',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Run Code'}
      </button>
      <div
        style={{
          marginTop: '20px',
          padding: '10px',
          backgroundColor: '#1e1e1e',
          color: '#61dafb',
          borderRadius: '5px',
          minHeight: '100px',
          fontFamily: 'monospace',
        }}
      >
        <pre>{output}</pre>
      </div>
    </div>
  );
};

export default PythonCompiler;
