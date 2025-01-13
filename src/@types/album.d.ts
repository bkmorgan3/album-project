export interface AlbumId {
    attributes: {[key:string]: string}
    label: string
}

export interface Albums {
    albums: Album[]
}

interface AlbumImage {
    attributes: {[key:string]: string}
    label: string
}

interface ArtistName {
    attributes: {[key:string]: string}
    label: string
}

export interface AlbumProps {
    id: AlbumId
    "im:image": AlbumImage[]
    "im:name": ArtistName
    "im:artist": {[key: string]: string}
}

export interface IAlbumProps {
    album: AlbumProps
}

// export type AlbumContextType = {
//     fetchedAlbums: AlbumProps[]
//     searchedAlbums: AlbumProps[]
//     selectedAlbum: AlbumProps
//     setSelectedAlbum: 
//     setFetchedAlbum:
//     setSearchedAlbum: 

// }
