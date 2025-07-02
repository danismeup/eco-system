import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [backendMessage, setBackendMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:5218/api/TestMe')
            .then(response => response.text())
            .then(data => setBackendMessage(data))
            .catch(() => setBackendMessage('Errore nel recupero dal backend'))
    }, [])

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <div style={{ marginTop: '2rem' }}>
                <strong>Risposta dal backend:</strong>
                <div>{backendMessage}</div>
            </div>
        </>
    )
}

export default App