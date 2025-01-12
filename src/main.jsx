import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.scss'
import App from './App'
import AlbumDetails from './AlbumDetails'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
)
