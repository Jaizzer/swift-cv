import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Experience from './Experience'
import Contact from './Contact'
import Education from './Education'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Experience></Experience>
    <Contact></Contact>
    <Education></Education>
  </React.StrictMode>,
)
