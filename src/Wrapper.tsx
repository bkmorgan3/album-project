import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import App from './App'
import AlbumDetails from './AlbumDetails'
import { AlbumContext } from "./AlbumContext"

export default function Wrapper() {
      const [selectedAlbum, setSelectedAlbum] = useState({})

    return (
    <BrowserRouter>
        <AlbumContext.Provider value={{selectedAlbum, setSelectedAlbum}}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />
        </Routes>
        </AlbumContext.Provider>
    </BrowserRouter>
    )
}