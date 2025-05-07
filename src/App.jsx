import React, { useState, useEffect } from 'react'
import './App.css'

export default function App() {

    // ======= START TEMPLATE CODE =======
  // You can remove everything between these comments and add your own code


  const [text, setText] = useState('');
  const fullText = `
  Vorb [v1.0] - Fast static site starter initialized
  > Open Source Vite + React + Bun template
  > Generating static site build...
  > Run - Bun create-vorb my-project
  
  ⚡ Blazing fast static app launcher
  `;

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typing);
      }
    }, 50);
    
    return () => clearInterval(typing);
  }, []);

  return (
    <main>
      <pre className="ascii-logo">{`
__      __        _     
\\ \\    / /       | |    
 \\ \\  / /__  _ __| |__  
  \\ \\/ / _ \\| '__| '_ \\ 
   \\  / (_) | |  | |_) |
    \\/ \\___/|_|  |_.__/ 
      `}</pre>
      
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <div className="terminal-title">vorb-terminal</div>
        </div>
        <pre>{text}<span className="cursor">|</span></pre>
      </div>
      
      <footer>
        <p>
          GitHub: <a href="https://github.com/forresttindall/vorb-template" target="_blank">vorb </a>
          — by <a href="https://forresttindall.dev/links">ForrestTindall.dev </a>
          — Host it on <a href="https://orbiter.host" target="_blank">Orbiter</a>
        </p>
      </footer>
    </main>
  )

  // ======= END TEMPLATE CODE =======
  // Add your own component code below or replace everything between the comments

}