
export interface AlbumInfo {
    id: string
    artistName: string
    releaseDate: string
    primaryGenreName: string
    artworkUrl100: string
    collectionName: string
}
export type AlbumAndTracks = [AlbumInfo, ...TrackInfo[]]

export interface TrackInfo {
    trackName: string
    trackId:string
}

 interface Props {
    album: AlbumAndTracks
}

export default function AlbumDetailsPage(props: Props) {
    console.log({props})
    const { album } = props;
    const [albumInfo, ...tracks] = album
    return  (
         <div>
            <div className='heading'>
                <div className='image'>
                    <img src={albumInfo.artworkUrl100} />
                </div>
                <div className='details'>
                <p className="artist">{albumInfo.artistName}</p>
                <p className="title">{albumInfo.collectionName}</p>
                <div className="metadata"> 
                    <p>{albumInfo.releaseDate.slice(0,4)} &nbsp;- &nbsp; </p>
                    <p>{albumInfo.primaryGenreName}</p> </div>
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