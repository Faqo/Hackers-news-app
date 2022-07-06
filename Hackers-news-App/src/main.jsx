import React from 'react'
import ReactDOM from 'react-dom/client'
import { HackersnewsApp } from './HackersnewsApp'
import { BrowserRouter } from "react-router-dom";

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <HackersnewsApp />
    </BrowserRouter>
  </React.StrictMode>
)
