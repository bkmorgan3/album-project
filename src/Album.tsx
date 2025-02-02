import { useContext } from "react";
import { truncate } from "./utils/truncate";
import { Link } from "react-router";
import { AlbumContext } from "./AlbumContext";
import { AlbumProps, IAlbumProps } from "./@types/album";

export default function Album(props: IAlbumProps) {
  const { setSelectedAlbum } = useContext(AlbumContext);
  const { album } = props;

  return (
    <article onClick={() => setSelectedAlbum(album)} className="album">
      <Link to={`albums/${album.id.attributes["im:id"]}`}>
        <img src={album["im:image"][2].label} />
        <div className="album-details">
          <span className="artist-name">
            {truncate(album["im:artist"].label, 18)}
          </span>
          <p className="album-name">{truncate(album["im:name"].label, 18)}</p>
        </div>
      </Link>
    </article>
  );
}
