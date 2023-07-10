import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { getItemAsync } from './script'

const container = document.getElementById('app')

// Create a root.
const root = ReactDOM.createRoot(container)

// Initial render
root.render(<App />)
