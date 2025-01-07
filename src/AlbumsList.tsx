import Album from "./Album"

interface AlbumId {
    attributes: {[key:string]: string}
    label: string;
}
interface AlbumsProps {
   id: AlbumId
   image: string
   artistName: string
   albumName: string
}

interface Props {
    albums: AlbumsProps[]
}

export default function AlbumsList(props:Props) {
    console.log('p', props)
    const {albums} = props;
    console.log("A", albums)
    return (
        <div className="container">
            { albums.map(album => (
                <Album key={album.id.attributes['im:id']} album={album} />
               ))}
        </div>
    )
}