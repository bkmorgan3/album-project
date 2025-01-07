export default function AlbumDetailsPage({ album }) {
    const tracks = !!album && album.slice(1)
    return  (
         <div>

                <div className='heading'>
                    <div className='image'>
                        <img src={album[0].artworkUrl100} />
                    </div>
                    <div className='details'>
                    <p className="artist">{album[0].artistName}</p>
                    <p className="title">{album[0].collectionName}</p>
                    <div className="metadata"> <p>{album[0].releaseDate.slice(0,4)} &nbsp;- &nbsp; </p>
            <p>{album[0].primaryGenreName}</p> </div>
            
            </div>
                    </div>

            <ol className='tracks'>
                {tracks.map((track => (
                    <li key={track.trackId}>{track.trackName}</li>
                )))}
            </ol>
             </div>
    )
}