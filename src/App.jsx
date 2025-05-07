import React from 'react'
import './App.css'

export default function App() {
  return (
    <main>
      <pre>
        {`
ZAP! [v1.0] - Fast static site starter initialized.
> Frameworks loaded: Bun + Vite + React
> Generating static site build...

        `}
      </pre>

      <footer>
        <p>
          GitHub: <a href="https://github.com/forresttindall/zap" target="_blank">Zap </a>   
          — by <a href="https://forresttindall.dev/links">ForrestTindall.dev </a>  
          — Host it on <a href="https://orbiter.host" target="_blank">Orbiter</a>
        </p>
      </footer>
    </main>
  )
}
