import { useParams } from 'react-router'
import { useEffect, useState, useContext } from 'react'
import AlbumDetailsPage from './AlbumDetailsPage'
import type { AlbumAndTracks } from './AlbumDetailsPage'
import { AlbumContext } from "./AlbumContext"


export default function AlbumDetails() {
    const {id} = useParams()
    const {selectedAlbum, setSelectedAlbum} = useContext(AlbumContext)
    console.log("S", selectedAlbum)
    

    return (
        <div>
         {selectedAlbum['im:name'].label}
        </div>
    )
}