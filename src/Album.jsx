

export default function Album({album}) {
    return (
       
        <div className="album" >
                    <img src={album['im:image'][2].label} />
                   <p>{album['im:artist'].label}</p>
                    </div>
       
    )
}