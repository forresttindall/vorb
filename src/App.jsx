import React from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <pre>
        {`
Vorb [v1.0] - Fast static site starter initialized.
> Loading - Open Source Vite + React + Bun template,
> Generating static site build...

> Bun create-zorb my-project

        `}
      </pre>

      <footer>
        <p>
          GitHub: <a href="https://github.com/forresttindall/zap" target="_blank">Vorb </a>   
          — by <a href="https://forresttindall.dev/links">ForrestTindall.dev </a>  
          — Host it on <a href="https://orbiter.host" target="_blank">Orbiter</a>
        </p>
      </footer>
    </main>
  )
}
